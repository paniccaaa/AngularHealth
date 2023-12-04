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

  timingsList!: string[];

  displayedColumns: string[] = [
    'id',
    'doctor_name',
    'experience',
    'patients',
    'speciality',
  ];

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

  selectDoctorEditorTab(id: number) {
    console.log('Selecting doctor with ID:', id);
    this.tabGroup.selectedIndex = 1;

    this.doctorsService.getDoctorById(id.toString()).subscribe((doctor) => {
      this.selectedDoctor = doctor;
    });

    if (this.selectedDoctor) {
      console.log(this.selectedDoctor);
    } else {
      console.log('pysto');
    }

    //this.timingsList = this.selectedDoctor.timingsList;
  }
}
