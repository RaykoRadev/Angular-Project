import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import {
  ServRespUserData,
  UserLog,
  UserProf,
  UserReg,
} from '../../../shared/utils/interfaces';
import {
  clearUserData,
  getUserData,
  setUserData,
} from '../../../shared/utils/userData';
import { UserService } from '../user-service/user.service';
import { UserProfileComponent } from '../../../auth/user-profile/user-profile.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubj = new BehaviorSubject<ServRespUserData | null>(
    getUserData()
  );
  currentUser$: Observable<ServRespUserData | null> = this.currentUserSubj;

  private _isLoggedIn = signal<boolean>(false);
  public isLoggedIn = this._isLoggedIn.asReadonly();

  constructor(private userService: UserService) {}

  login(data: UserLog) {
    return this.userService.login(data).pipe(
      tap((user) => {
        setUserData(user);
        this._isLoggedIn.set(true);
        this.currentUserSubj.next(user);
      })
    );
  }

  register(data: UserReg) {
    return this.userService.register(data).pipe(
      tap((user) => {
        setUserData(user);
        this._isLoggedIn.set(true);
        this.currentUserSubj.next(user);
      })
    );
  }

  logout() {
    clearUserData();
    this._isLoggedIn.set(false);
    this.currentUserSubj.next(null);
  }
}
