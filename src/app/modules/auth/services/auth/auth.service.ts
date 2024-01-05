import { HttpClient } from '@angular/common/http';
import { ICredentials } from 'src/app/shared/interfaces/credentials';
import { ISignUpForm } from 'src/app/shared/interfaces/signUpForm';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user: ISignUpForm): Observable<any> {
    return this.http.post(`${environment.apiUrl}/register`, user);
  }

  login(credentials: ICredentials): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth`, credentials);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }
}
