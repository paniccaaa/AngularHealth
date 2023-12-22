import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService, AuthResponse } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit, OnDestroy {
  user!: AuthResponse;
  test = true;
  private userSubscription!: Subscription;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

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

  logoutHandler() {
    this.userService.clearUser();
    this.authService.logout();
  }
}
