import { Injectable, signal } from '@angular/core';
import { BASE_USER_URL } from '../shared/cosntants/constants';
import { HttpClient } from '@angular/common/http';
import { ServRespUserData, UserLog, UserReg } from '../shared/utils/interfaces';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import {
  clearUserData,
  getUserData,
  setUserData,
} from '../shared/utils/userData';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  USER_TOKEN = 'userToken';
  signalName = signal(getUserData);
  private autState$ = new BehaviorSubject<boolean>(!!getUserData());

  // Observable for components to subscribe to
  // isLoggedIn$ = this.autState$.asObservable();

  constructor(private http: HttpClient) {}

  // setLoggedIn(val: boolean): void {
  //   this.authState.next(val);
  // }

  register(data: UserReg): Observable<ServRespUserData> {
    const url = BASE_USER_URL + '/register';
    // this.autState$.next(true);
    return this.http.post<ServRespUserData>(url, data);
    // .pipe(
    //   catchError((err) => {
    //     return throwError(() => err);
    //   })
    // );
  }

  login(data: UserLog): Observable<ServRespUserData> {
    const url = BASE_USER_URL + '/login';
    // this.autState$.next(true);
    return this.http.post<ServRespUserData>(url, data);
  }

  logout() {
    const url = BASE_USER_URL + '/logout';
    // this.autState$.next(false);
    return this.http.get<ServRespUserData>(url);
  }

  // get currentState() {
  //   return this.autState$.value;
  // }
}
