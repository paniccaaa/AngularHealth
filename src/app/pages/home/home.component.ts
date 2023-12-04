import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { CategoryService } from 'src/app/services/category/category.service';
import {
  Doctor,
  DoctorsService,
} from 'src/app/services/doctors/doctors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  doctors: Doctor[] = [];
  constructor(
    private doctorsService: DoctorsService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.categoryService
      .onFilterChange()
      .pipe(debounceTime(1500))
      .subscribe(() => {
        this.loadDoctors();
      });
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
