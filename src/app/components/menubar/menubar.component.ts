import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  user!: User;
  test = true;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.user;
  }
}
