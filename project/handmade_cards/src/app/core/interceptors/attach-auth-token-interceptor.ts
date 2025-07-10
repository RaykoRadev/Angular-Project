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
import { catchError, tap } from 'rxjs';
import { ServRespUserData } from '../../shared/utils/interfaces';

export const attachAuthTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const userData = getUserData();
  if (userData) {
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
        (req.url.endsWith('login') || req.url.endsWith('register'))
      ) {
        setUserData(event.body as ServRespUserData);
      }
    }),

    catchError((err) => {
      if (err.status === 0) {
        console.error('Error from Interceptor: ', err);
      }
      // can be added all kinds of error handlelings
      return [err];
    })
  );
};
