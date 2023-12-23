import { HttpClient } from '@angular/common/http';
import { IAuthResponse } from 'src/app/shared/interfaces/authResponse';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://808ad2a997f895b8.mokky.dev';

  constructor(private http: HttpClient) {}

  register(user: IAuthResponse): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth`, credentials);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
