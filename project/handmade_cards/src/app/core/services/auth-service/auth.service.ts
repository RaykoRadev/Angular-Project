import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubj = new BehaviorSubject<ServRespUserData | null>(
    getUserData()
  );
  currentUser$: Observable<ServRespUserData | null> = this.currentUserSubj;
  constructor(private userService: UserService) {}

  login(data: UserLog) {
    return this.userService.login(data).pipe(
      tap((user) => {
        setUserData(user);
        this.currentUserSubj.next(user);
      })
    );
  }

  register(data: UserReg) {
    return this.userService.register(data).pipe(
      tap((user) => {
        setUserData(user);
        this.currentUserSubj.next(user);
      })
    );
  }

  logout() {
    clearUserData();
    this.currentUserSubj.next(null);
  }

  getCurrentUser(): ServRespUserData | null {
    console.log('let see:', this.currentUserSubj.value);

    return this.currentUserSubj.value;
  }
}
