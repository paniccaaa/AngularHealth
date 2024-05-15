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
  //env = `https://db-flask-test.vercel.app`
  env = `https://808ad2a997f895b8.mokky.dev`
  constructor(private http: HttpClient) {}

  register(user: ISignUpForm): Observable<any> {
    return this.http.post(`${this.env}/register`, user);
  }
  //environment.apiUrl
  login(credentials: ICredentials): Observable<any> {
    return this.http.post(`${this.env}/auth`, credentials);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }
}
