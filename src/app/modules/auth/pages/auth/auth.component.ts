import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { Component } from '@angular/core';
import { IAuthResponse } from 'src/app/shared/interfaces/authResponse';
import { ICredentials } from 'src/app/shared/interfaces/credentials';
import { ISignUpForm } from 'src/app/shared/interfaces/signUpForm';
import { Router } from '@angular/router';

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
    private router: Router,
    private fb: FormBuilder
  ) {
    this.signUpForm = this.fb.group(
      {
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        age: [0, Validators.required],
        gender: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );

    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    return password.value === confirmPassword.value
      ? null
      : { passwordMismatch: true };
  }

  register() {
    if (this.signUpForm.invalid) {
      return;
    }

    const user: ISignUpForm = {
      fullName: this.signUpForm.value.fullName,
      email: this.signUpForm.value.email,
      age: this.signUpForm.value.age,
      gender: this.signUpForm.value.gender,
      password: this.signUpForm.value.password,
    };
    this.authService.register(user).subscribe({
      next: (response: IAuthResponse) => {
        this.authService.saveToken(response.token);
        this.router.navigate(['']);
      },
      error: (error) => {
        console.log('произошла ошибка при регистрации', error);
      },
    });
  }

  login() {
    if (this.signInForm.invalid) {
      return;
    }

    const credentials: ICredentials = {
      email: this.signInForm.value.email,
      password: this.signInForm.value.password,
    };

    this.authService.login(credentials).subscribe({
      next: (response: IAuthResponse) => {
        this.authService.saveToken(response.token);
        this.router.navigate(['']);
      },
      error: (error) => {
        console.log('произошла ошибка при входе', error);
      },
    });
  }
}
