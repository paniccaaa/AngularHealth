import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from 'src/app/pages/appointments/appointments.component';
import {
  Doctor,
  DoctorsService,
} from 'src/app/services/doctors/doctors.service';

@Component({
  selector: 'app-appointment-today',
  templateUrl: './appointment-today.component.html',
  styleUrls: ['./appointment-today.component.scss'],
})
export class AppointmentTodayComponent implements OnInit {
  @Input() eventTime: string = 'Upcoming';
  @Input() appointment!: Appointment;
  @Input() doctorId!: number;
  doctor?: Doctor;

  constructor(private doctorsService: DoctorsService) {}

  ngOnInit() {
    this.loadDoctor();
  }

  loadDoctor() {
    this.doctorsService.getDoctorById(this.doctorId.toString()).subscribe({
      next: (res) => (this.doctor = res),
      error: (err) =>
        console.log('при получении доктора произошла ошибка: ', err),
    });
  }
}
