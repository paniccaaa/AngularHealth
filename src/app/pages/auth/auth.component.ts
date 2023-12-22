import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AuthService,
  Credentials,
  AuthResponse,
} from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  hide = true;
  selectedGender = '';
  genders = ['Male', 'Female', 'Other'];
  signUpForm: FormGroup;
  signInForm: FormGroup;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.signUpForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      age: [null, Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register(): void {
    const user: AuthResponse = this.signUpForm.value;
    this.authService.register(user).subscribe({
      next: (response: AuthResponse) => {
        this.authService.saveToken(response.token);
        this.router.navigate(['']);
      },
      error: (error) => {
        console.log('произошла ошибка при регистрации', error);
      },
    });
  }

  login(): void {
    const credentials: Credentials = {
      email: this.signInForm.value.email,
      password: this.signInForm.value.password,
    };

    this.authService.login(credentials).subscribe({
      next: (response: AuthResponse) => {
        this.authService.saveToken(response.token);
        this.router.navigate(['']);
      },
      error: (error) => {
        console.log('произошла ошибка при входе', error);
      },
    });
  }
}
