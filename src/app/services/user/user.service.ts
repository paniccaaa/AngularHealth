import { Injectable } from '@angular/core';
import { AuthResponse } from '../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

export interface User {
  id: number;
  email: string;
  password: string;
  fullName: string;
  age: number;
  gender: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: AuthResponse;
  userChanged = new Subject<AuthResponse>();
  urlAuthMe = 'https://808ad2a997f895b8.mokky.dev/auth_me';
  urlUsers = 'https://808ad2a997f895b8.mokky.dev/users';

  constructor(private http: HttpClient) {}

  checkAuthorization(token: string | null) {
    if (!token) {
      console.error('Токен отсутствует');
      return;
    }

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    this.http.get<AuthResponse>(this.urlAuthMe, { headers }).subscribe({
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

  editUser(id: string, user: User) {
    return this.http.patch(`${this.urlUsers}/${id}`, user);
  }

  clearUser() {
    this.user = undefined!;
  }
}

