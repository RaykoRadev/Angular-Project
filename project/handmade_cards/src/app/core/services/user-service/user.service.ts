import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import {
  ServRespUserData,
  UserLog,
  UserReg,
} from '../../../shared/utils/interfaces';
import { BASE_USER_URL } from '../../../shared/cosntants/constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  static service(service: any): UserService {
    throw new Error('Method not implemented.');
  }
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
