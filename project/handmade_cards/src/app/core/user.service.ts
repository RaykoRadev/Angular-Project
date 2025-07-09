import { Injectable } from '@angular/core';
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

  private isLogged = new BehaviorSubject<boolean>(!!getUserData());

  private onAuthSuccsess(res: ServRespUserData, isLogged: boolean) {
    isLogged ? setUserData(res) : clearUserData();
    this.setLoggedIn(isLogged);
  }

  constructor(private http: HttpClient) {}

  setLoggedIn(val: boolean): void {
    this.isLogged.next(val);
  }

  register(data: UserReg): Observable<ServRespUserData> {
    const url = BASE_USER_URL + '/register';

    return this.http.post<ServRespUserData>(url, data).pipe(
      tap((res) => {
        this.onAuthSuccsess(res, true);
      }),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  login(data: UserLog): Observable<ServRespUserData> {
    const url = BASE_USER_URL + '/login';

    return this.http.post<ServRespUserData>(url, data).pipe(
      tap((res) => {
        this.onAuthSuccsess(res, true);
      }),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  logout(): Observable<ServRespUserData> {
    const url = BASE_USER_URL + '/logout';
    return this.http.post<ServRespUserData>(url).pipe(
      tap((res) => {
        this.onAuthSuccsess(res, false);
      })
    );
  }
}
