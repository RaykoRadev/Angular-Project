import {
  HttpEvent,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';
import {
  clearUserData,
  getUserData,
  setUserData,
} from '../../shared/utils/userData';
import { catchError, tap, throwError } from 'rxjs';
import { ServRespUserData } from '../../shared/utils/interfaces';
import { IMAGE_UPLOAD } from '../../shared/cosntants/constants';

export const attachAuthTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const userData = getUserData();
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
      if (err.status === 0) {
        console.error('Error from Interceptor: ', err);
      }
      // can be added all kinds of error handlelings
      return throwError(() => err);
    })
  );
};
