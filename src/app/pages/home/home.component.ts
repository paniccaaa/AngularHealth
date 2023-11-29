import { Component, OnInit } from '@angular/core';
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
    this.loadDoctors();
  }
  loadDoctors() {
    // Получаем выбранные параметры из сервиса категорий
    const { sortState, selectedCategory, doctorValue } = this.categoryService;

    // Используем выбранные параметры для загрузки докторов с учетом фильтрации и сортировки
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
  click() {
    console.log(this.categoryService.doctorValue);
    console.log(this.categoryService.selectedCategory);
    console.log(this.categoryService.sortState);
  }
}
