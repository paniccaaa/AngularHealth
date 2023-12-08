import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

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

  constructor(private authService: AuthService, private fb: FormBuilder) {
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
    const user = this.signUpForm.value;
    this.authService.register(user).subscribe({
      next: (response) => {
        // Handle successful registration
        this.authService.saveToken(response.token);
        console.log(response);
      },
      error: (error) => {
        // Handle registration error
        console.log('произошла ошибка при регистрации', error);
      },
    });
  }

  login(): void {
    const credentials = {
      email: this.signInForm.value.email,
      password: this.signInForm.value.password,
    };

    this.authService.login(credentials).subscribe({
      next: (response) => {
        // Handle successful login
        this.authService.saveToken(response.token);
        console.log(response);
      },
      error: (error) => {
        // Handle login error
        console.log('произошла ошибка при входе', error);
      },
    });
  }
}
