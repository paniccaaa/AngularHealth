import { Injectable } from '@angular/core';
import { User } from '../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: User;
  userIsAuthenticated: boolean = false;
  urlAuthMe = 'https://808ad2a997f895b8.mokky.dev/auth_me';
  urlUsers = 'https://808ad2a997f895b8.mokky.dev/users';
  constructor(private http: HttpClient) {}

  checkAuthorization(token: string | null) {
    if (!token) {
      console.error('Токен отсутствует');
      // Дополнительная обработка, например, перенаправление на страницу входа
      this.userIsAuthenticated = false;
      return;
    }

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    this.http.get(this.urlAuthMe, { headers }).subscribe({
      next: (res) => {
        if (res) {
          console.log(res);
          this.userIsAuthenticated = true;
        }
      },
      error: (error) => {
        console.log('произошла ошибка при auth_me', error);
        this.userIsAuthenticated = false;
      },
    });
  }

  editUser(id: string, user: any) {
    return this.http.patch(`${this.urlUsers}/${id}`, user);
  }
}

