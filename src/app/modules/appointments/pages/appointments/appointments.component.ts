import { Component, OnInit } from '@angular/core';

import { DashboardAppointmentsService } from '../../services/dashboard-appointments/dashboard-appointments.service';
import { IAppointment } from 'src/app/shared/interfaces/appointment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'user_name',
    'doctor_name',
    'date',
    'time',
    'status',
  ];

  appointments: IAppointment[] = [];

  constructor(private dashboadAppointments: DashboardAppointmentsService) {}

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.dashboadAppointments.getAllAppointments().subscribe({
      next: (appointments) => (this.appointments = appointments),
      error: (e) => console.log('При получении встреч произошла ошибка:', e),
    });
  }
}
