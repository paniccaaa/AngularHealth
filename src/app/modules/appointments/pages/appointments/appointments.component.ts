import { Component, OnInit } from '@angular/core';
import { DashboardAppointmentsService } from '../../services/dashboard-appointments/dashboard-appointments.service';

export interface Appointment {
  id: number;
  user_id: number;
  user_name: string;
  doctor_id: number;
  doctor_name: string;
  date: string;
  time: string;
  status: string;
}

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

  appointments: Appointment[] = [];

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

  onClick(id: any) {
    alert(this.appointments[id - 1].user_name);
  }
}
