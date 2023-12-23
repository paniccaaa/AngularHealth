import { Component, OnInit } from '@angular/core';

import { AppointmentEventService } from 'src/app/shared/services/appointment-event/appointment-event.service';
import { AppointmentsService } from 'src/app/modules/appointments-schedule/services/appointments/appointments.service';
import { IAppointment } from 'src/app/shared/interfaces/appointment';

@Component({
  selector: 'app-appointments-schedule',
  templateUrl: './appointments-schedule.component.html',
  styleUrls: ['./appointments-schedule.component.scss'],
})
export class AppointmentsScheduleComponent implements OnInit {
  statuses = ['upcoming', 'completed', 'canceled'];
  upcomingApp: IAppointment[] = [];
  completedApp: IAppointment[] = [];
  canceledApp: IAppointment[] = [];

  constructor(
    private appointmentsService: AppointmentsService,
    private appointmentEventService: AppointmentEventService
  ) {}

  ngOnInit() {
    this.loadAppointments();

    this.appointmentEventService.appointmentEvent$.subscribe(() => {
      this.loadAppointments();
    });
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
