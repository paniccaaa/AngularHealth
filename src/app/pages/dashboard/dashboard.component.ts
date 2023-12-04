import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import {
  Category,
  CategoryService,
} from 'src/app/services/category/category.service';
import {
  Doctor,
  DoctorsService,
} from 'src/app/services/doctors/doctors.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  doctors: Doctor[] = [];
  selectedDoctor!: Doctor;
  categories: Category[] = [];

  selectedCategory = '';

  timings = new FormControl('');

  timingsList: string[] = [
    '8:00 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
  ];

  displayedColumns: string[] = [
    'id',
    'doctor_name',
    'experience',
    'patients',
    'speciality',
  ];

  //dataSource = ELEMENT_DATA;

  constructor(
    private categoryService: CategoryService,
    private doctorsService: DoctorsService
  ) {}

  ngOnInit() {
    this.doctorsService.getAllDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
    this.categoryService
      .getAllCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  selectDoctorEditorTab(id: string) {
    this.tabGroup.selectedIndex = 1; // Индекс таба с label "Doctor Editor" (начиная с 0)
    this.doctorsService.getDoctorById(id).subscribe((doctor) => {
      this.selectedDoctor = doctor;
    });
  }
}
