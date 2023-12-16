import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  user!: User;
  test = true;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.userService.user;
  }

  logoutHandler() {
    this.authService.logout();
    //this.userIsAuth = this.userService.userIsAuthenticated;
    const token = this.authService.getToken();
    this.userService.checkAuthorization(token);
    this.router.navigate(['/auth']);
  }
}
