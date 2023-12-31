import { Component, OnDestroy, OnInit } from '@angular/core';

import { IUser } from 'src/app/shared/interfaces/user';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  user!: IUser;
  selectedGender = '';
  genders = ['Male', 'Female', 'Other'];
  private userSubscription!: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.user;
    this.userSubscription = this.userService.userChanged.subscribe(
      (user: IUser) => {
        this.user = user;
      }
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  editUserInfo() {
    const userWithoutToken: IUser = {
      id: this.user.id,
      email: this.user.email,
      password: this.user.password,
      fullName: this.user.fullName,
      age: this.user.age,
      gender: this.user.gender,
    };

    this.userService
      .editUser(this.user.id.toString(), userWithoutToken)
      .subscribe({
        next: () => {
          alert('Successfully edited personal info');
        },
        error: (error) => {
          console.log('произошла ошибка при редак. юзера: ', error);
        },
      });
  }
}
