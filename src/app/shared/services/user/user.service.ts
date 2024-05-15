import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IAuthResponse } from '../../interfaces/authResponse';
import { IUser } from '../../interfaces/user';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  authResp!: IAuthResponse;
  user!: IUser;
  userChanged = new Subject<IUser>();
  //urlAuthMe = `${environment.apiUrl}/auth_me`;
  urlUsers = `${environment.apiUrl}/users`;
  urlAuthMe = `${`https://808ad2a997f895b8.mokky.dev`}/auth_me`
  //urlUsers = `${`https://808ad2a997f895b8.mokky.dev`}/users`
  constructor(private http: HttpClient) {}

  checkAuthorization(token: string | null) {
    if (!token) {
      console.error('Токен отсутствует');
      this.clearUser();
      return;
    }

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    this.http.get<IUser>(this.urlAuthMe, { headers }).subscribe({
      next: (res) => {
        if (res) {
          console.log(res);
          this.user = res;
          this.userChanged.next(this.user);
        }
      },
      error: (error) => {
        console.log('произошла ошибка при auth_me', error);
      },
    });
  }

  editUser(id: string, user: IUser) {
    return this.http.patch(`${this.urlUsers}/${id}`, user);
  }

  clearUser() {
    this.user = undefined!;
  }
}
