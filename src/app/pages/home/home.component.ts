import { Component, OnInit } from '@angular/core';
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
  value = 'Dr Dre';
  constructor(private doctorsService: DoctorsService) {}

  ngOnInit() {
    this.doctorsService.getAllDoctors().subscribe({
      next: (res) => (this.doctors = res),
      error: (e) => console.log('При получении докторов произошла ошибка:', e),
    });
  }
}
