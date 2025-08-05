import {
  HttpEvent,
  HttpInterceptorFn,
  HttpResponse,
  HttpStatusCode,
} from '@angular/common/http';
import {
  clearUserData,
  getUserData,
  setUserData,
} from '../../shared/utils/userData';
import { catchError, tap, throwError } from 'rxjs';
import { ServRespUserData } from '../../shared/utils/interfaces';
import { IMAGE_UPLOAD } from '../../shared/cosntants/constants';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error-service/error.service';

export const attachAuthTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const userData = getUserData();
  const router = inject(Router);
  const errorService = inject(ErrorService);

  if (userData && !req.url.startsWith(IMAGE_UPLOAD)) {
    req = req.clone({
      setHeaders: {
        'x-authorization': userData.token,
      },
    });
  }
  return next(req).pipe(
    tap((event: HttpEvent<unknown>) => {
      if (
        event instanceof HttpResponse &&
        (req.url.endsWith('login') ||
          req.url.endsWith('register') ||
          req.url.endsWith('me'))
      ) {
        setUserData(event.body as ServRespUserData);
      } else if (
        event instanceof HttpResponse &&
        req.url.startsWith(IMAGE_UPLOAD)
      ) {
        console.log('upload continuing');
      }
    }),

    catchError((err) => {
      if (err.status === HttpStatusCode.Unauthorized) {
        clearUserData();

        errorService.setError(err.error.message || 'Впиши се тук!');

        console.error('Error from Interceptor: ', err);

        router.navigate(['/login']);
      }
      // can be added all kinds of error handlelings
      return throwError(() => err);
    })
  );
};
