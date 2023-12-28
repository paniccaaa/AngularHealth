import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { IUser } from '../../interfaces/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit, OnDestroy {
  user!: IUser;
  isOpened = false;
  private unsubscribe$ = new Subject<void>();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user = this.userService.user;
    this.userService.userChanged
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user: IUser) => {
        this.user = user;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
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
