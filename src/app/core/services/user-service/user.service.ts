import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import {
  ServRespUserData,
  UserLog,
  UserProf,
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
  // USER_TOKEN = 'userToken';
  private url = BASE_USER_URL;

  constructor(private http: HttpClient) {}

  register(data: UserReg): Observable<ServRespUserData> {
    // const url = BASE_USER_URL + '/register';

    return this.http.post<ServRespUserData>(this.url + '/register', data);
  }

  login(data: UserLog): Observable<ServRespUserData> {
    // const url = BASE_USER_URL + '/login';

    return this.http.post<ServRespUserData>(this.url + '/login', data);
  }

  logout() {
    // const url = BASE_USER_URL + '/logout';

    return this.http.get<ServRespUserData>(this.url + '/logout');
  }

  // withot that headers is retunong status 304 and doesn trigger change
  profile() {
    return this.http.get<UserProf>(this.url + '/me', {
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    });
  }
}
