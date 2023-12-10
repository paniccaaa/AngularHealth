import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user!: User;
  selectedGender = '';
  genders = ['Male', 'Female', 'Other'];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.user;
  }

  editUserInfo() {}
}
