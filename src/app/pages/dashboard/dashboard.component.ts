import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import {
  Category,
  CategoryService,
} from 'src/app/services/category/category.service';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
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
  selectedDoctor: Doctor = {
    id: 1,
    name: 'Wendy Yii',
    universities:
      'MBBS (International Medical University, Malaysia), MRCP (Royal College of Physicians, United Kingdom)',
    patients: 56,
    experience: 9,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/848.jpg',
    description: "I'm a dermatology specialist",
    speciality: 'Dermatology',
    timingsList: [
      '8:00 AM',
      '9:00 AM',
      '10:00 AM',
      '11:00 AM',
      '1:00 PM',
      '2:00 PM',
      '3:00 PM',
      '4:00 PM',
      '5:00 PM',
      '7:00 PM',
    ],
  };
  categories: Category[] = [];

  selectedCategory = '';

  timings = new FormControl();

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
    private doctorsService: DoctorsService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.doctorsService.getAllDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });

    this.categoryService
      .getAllCategories()
      .subscribe((categories) => (this.categories = categories));

    this.doctorsService.getDoctorById('1').subscribe((doctor) => {
      this.selectedDoctor = doctor;
    });
  }

  addDoctor() {
    this.selectedDoctor.timingsList = this.timings.value;
    this.dashboardService.addDoctor(this.selectedDoctor).subscribe((doc) => {
      doc
        ? alert('Успешно добавлен новый доктор')
        : alert('Не получилось добавить');
      this.loadDoctors();
    });
  }

  editDoctor() {
    this.selectedDoctor.timingsList = this.timings.value;
    this.dashboardService
      .editDoctor(this.selectedDoctor.id.toString(), this.selectedDoctor)
      .subscribe((doc) => {
        doc ? alert('Успешно edit новый доктор') : alert('Не получилось edit');
        this.loadDoctors();
      });
  }

  deleteDoctor() {
    this.selectedDoctor.timingsList = this.timings.value;
    this.dashboardService
      .deleteDoctor(this.selectedDoctor.id.toString())
      .subscribe(() => {
        this.loadDoctors();
      });
  }

  selectDoctorEditorTab(id: number) {
    console.log('Selecting doctor with ID:', id);

    this.tabGroup.selectedIndex = 1;

    this.doctorsService.getDoctorById(id.toString()).subscribe((doctor) => {
      this.selectedDoctor = doctor;
      this.timingsList = doctor.timingsList;
      this.timings = new FormControl(this.timingsList); //тут не хочет заполняться форма
    });
  }

  loadDoctors() {
    this.doctorsService.getAllDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
    this.tabGroup.selectedIndex = 0;
  }
}
