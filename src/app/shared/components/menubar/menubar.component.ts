import { Component, OnDestroy, OnInit } from '@angular/core';

import { IUser } from '../../interfaces/user';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit, OnDestroy {
  user!: IUser;
  isOpened = false;
  private userSubscription!: Subscription;

  constructor(private userService: UserService, private router: Router) {}

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

  logoutHandler() {
    this.isOpened = false;
    this.userService.clearUser();
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      localStorage.removeItem('token');
      this.router.navigate(['/auth']);
    }
  }
}
