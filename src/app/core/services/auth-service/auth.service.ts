import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import {
  ServRespUserData,
  UserLog,
  UserReg,
} from '../../../shared/utils/interfaces';
import {
  clearUserData,
  getUserData,
  setUserData,
} from '../../../shared/utils/userData';
import { UserService } from '../user-service/user.service';
import { ErrorService } from '../error-service/error.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //save the user data, accesesable in profile page
  private currentUserSubj = new BehaviorSubject<ServRespUserData | null>(
    getUserData()
  );
  currentUser$: Observable<ServRespUserData | null> = this.currentUserSubj;

  private _isLoggedIn = signal<boolean>(!!getUserData());
  public isLoggedIn = this._isLoggedIn.asReadonly();

  constructor(
    private userService: UserService,
    private errorService: ErrorService
  ) {}

  login(data: UserLog) {
    return this.userService.login(data).pipe(
      tap((user) => {
        setUserData(user);
        this._isLoggedIn.set(true);
        this.currentUserSubj.next(user);
      }),
      catchError((err) => {
        this.errorService.setError(
          err.error.message || `Неуспешно вписване! \n ${err.error.error}`
        );
        throw err;
      })
    );
  }

  register(data: UserReg) {
    return this.userService.register(data).pipe(
      tap((user) => {
        setUserData(user);
        this._isLoggedIn.set(true);
        this.currentUserSubj.next(user);
      }),
      catchError((err) => {
        this.errorService.setError(
          err.error.message || `Неуспешна регистрация! \n ${err.error.error}`
        );

        console.log('log the error: ', err);

        throw err;
      })
    );
  }

  logout() {
    clearUserData();
    this._isLoggedIn.set(false);
    this.currentUserSubj.next(null);
  }
}
