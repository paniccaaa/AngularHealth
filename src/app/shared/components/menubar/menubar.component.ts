import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  AuthService,
  AuthResponse,
} from 'src/app/modules/auth/services/auth/auth.service';
import { User, UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit, OnDestroy {
  user!: User;
  isOpened = false;
  private userSubscription!: Subscription;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user = this.userService.user;
    this.userSubscription = this.userService.userChanged.subscribe(
      (user: User) => {
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
