import { Injectable } from '@angular/core';
import { BASE_USER_URL } from '../shared/cosntants/constants';
import { HttpClient } from '@angular/common/http';
import { UserAuth, UserReg } from '../shared/cosntants/interfaces';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  USER_TOKEN = 'userToken';
  user: UserAuth | null = null;
  userReg: UserReg | null = null;

  constructor(private http: HttpClient) {}

  register(data: UserReg): Observable<UserReg> {
    const url = BASE_USER_URL + '/register';

    return this.http.post<UserReg>(url, data).pipe(
      tap((res) => {
        this.userReg = res;
        localStorage.setItem(this.USER_TOKEN, JSON.stringify(res));
      })
    );
  }

  login() {
    //todo send request to the server
    if (!this.user) {
      throw new Error('missing auth token');
    }
    localStorage.setItem(this.USER_TOKEN, JSON.stringify(this.user));
  }

  logout() {
    //todo send request to the server
    localStorage.removeItem(this.USER_TOKEN);
  }
}
