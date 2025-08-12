import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from '../services/error-service/error.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';
      // let errorMessage = 'Нещо се обърка!';

      if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message; // client side error
      } else {
        errorMessage = error.error?.message || error.message; // server side error
      }

      errorService.setError(errorMessage);
      return throwError(() => error);
    })
  );
};
