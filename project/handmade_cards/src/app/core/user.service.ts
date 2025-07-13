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

  constructor(private http: HttpClient) {}

  register(data: UserReg): Observable<ServRespUserData> {
    const url = BASE_USER_URL + '/register';

    return this.http.post<ServRespUserData>(url, data);
  }

  login(data: UserLog): Observable<ServRespUserData> {
    const url = BASE_USER_URL + '/login';

    return this.http.post<ServRespUserData>(url, data);
  }

  logout() {
    const url = BASE_USER_URL + '/logout';

    return this.http.get<ServRespUserData>(url);
  }
}
