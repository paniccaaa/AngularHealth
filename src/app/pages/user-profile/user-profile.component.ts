import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthResponse } from 'src/app/services/auth/auth.service';
import { UserService, User } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  user!: AuthResponse;
  selectedGender = '';
  genders = ['Male', 'Female', 'Other'];
  private userSubscription!: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.user;
    this.userSubscription = this.userService.userChanged.subscribe(
      (user: AuthResponse) => {
        this.user = user;
      }
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  editUserInfo() {
    const userWithoutToken: User = {
      id: this.user.data.id,
      email: this.user.data.email,
      password: this.user.data.password,
      fullName: this.user.data.fullName,
      age: this.user.data.age,
      gender: this.user.data.gender,
    };

    this.userService
      .editUser(this.user.data.id.toString(), userWithoutToken)
      .subscribe({
        next: (resp) => {
          console.log(resp);
        },
        error: (error) => {
          console.log('произошла ошибка при редак. юзера: ', error);
        },
      });
  }
}
