import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments/appointments.service';
import { DoctorsService } from 'src/app/services/doctors/doctors.service';
import { Appointment } from '../appointments/appointments.component';

@Component({
  selector: 'app-appointments-schedule',
  templateUrl: './appointments-schedule.component.html',
  styleUrls: ['./appointments-schedule.component.scss'],
})
export class AppointmentsScheduleComponent implements OnInit {
  statuses = ['upcoming', 'completed', 'canceled'];
  upcomingApp: Appointment[] = [];
  completedApp: Appointment[] = [];
  canceledApp: Appointment[] = [];

  constructor(
    private appointmentsService: AppointmentsService,
    private doctorsService: DoctorsService
  ) {}

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.appointmentsService.getAppointmentsByParams('upcoming').subscribe({
      next: (res) => (this.upcomingApp = res),
      error: (err) => console.log('произошла ошибка при upcomingApp: ', err),
    });

    this.appointmentsService.getAppointmentsByParams('completed').subscribe({
      next: (res) => (this.completedApp = res),
      error: (err) => console.log('произошла ошибка при completedApp: ', err),
    });

    this.appointmentsService.getAppointmentsByParams('canceled').subscribe({
      next: (res) => (this.canceledApp = res),
      error: (err) => console.log('произошла ошибка при canceledApp: ', err),
    });
  }
}
