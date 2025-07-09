import { Injectable } from '@angular/core';
import { BASE_USER_URL } from '../shared/cosntants/constants';
import { HttpClient } from '@angular/common/http';
import { UserAuth, UserReg } from '../shared/cosntants/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  USER_TOKEN = 'userToken';
  user: UserAuth | null = null;
  userReg: UserReg | null = null;

  constructor(private http: HttpClient) {}

  register(data: UserReg): UserReg {
    const url = BASE_USER_URL + '/register';

    this.http.post<object>(url, data).subscribe({
      next: (res: any) => {
        // console.log('reg succsesfull', res);

        this.userReg = res as UserReg;
        // console.log(this.userReg);

        localStorage.setItem(this.USER_TOKEN, JSON.stringify(this.userReg));
        return res;
      },
    });

    return data;
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
