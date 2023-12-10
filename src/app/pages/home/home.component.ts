import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CategoryService } from 'src/app/services/category/category.service';
import {
  Doctor,
  DoctorsService,
} from 'src/app/services/doctors/doctors.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  doctors: Doctor[] = [];
  userIsAuth!: boolean;

  constructor(
    private doctorsService: DoctorsService,
    private categoryService: CategoryService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.categoryService
      .onFilterChange()
      .pipe(debounceTime(1100))
      .subscribe(() => {
        this.loadDoctors();
      });

    this.userIsAuth = this.userService.userIsAuthenticated;
    const token = this.authService.getToken();
    this.userService.checkAuthorization(token);
  }

  loadDoctors() {
    const { sortState, selectedCategory, doctorValue } = this.categoryService;

    this.doctorsService
      .getDoctorsByFilter(
        selectedCategory || 'All',
        doctorValue,
        sortState.direction,
        sortState.active
      )
      .subscribe((doctors) => {
        this.doctors = doctors;
      });
  }
}
