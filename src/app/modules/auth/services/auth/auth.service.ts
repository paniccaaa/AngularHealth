import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../../../../shared/services/user/user.service';
import { Router } from '@angular/router';

export interface AuthResponse {
  token: string;
  data: {
    id: number;
    email: string;
    password: string;
    fullName: string;
    age: number;
    gender: string;
  };
}

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://808ad2a997f895b8.mokky.dev';

  constructor(private http: HttpClient, private router: Router) {}

  register(user: AuthResponse): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth`, credentials);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
