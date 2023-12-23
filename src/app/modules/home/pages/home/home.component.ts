import { Component, OnInit } from '@angular/core';

import { CategoryService } from 'src/app/modules/home/services/category/category.service';
import { DoctorsService } from 'src/app/modules/home/services/doctors/doctors.service';
import { IDoctor } from 'src/app/shared/interfaces/doctor';
import { UserService } from 'src/app/shared/services/user/user.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  doctors: IDoctor[] = [];

  constructor(
    private doctorsService: DoctorsService,
    private categoryService: CategoryService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.categoryService
      .onFilterChange()
      .pipe(debounceTime(1100))
      .subscribe(() => {
        this.loadDoctors();
      });

    const token = localStorage.getItem('token');
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
