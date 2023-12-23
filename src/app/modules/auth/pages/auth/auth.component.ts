import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { Component } from '@angular/core';
import { IAuthResponse } from 'src/app/shared/interfaces/authResponse';
import { ICredentials } from 'src/app/shared/interfaces/credentials';
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
    const user: IAuthResponse = this.signUpForm.value;
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

  login(): void {
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
