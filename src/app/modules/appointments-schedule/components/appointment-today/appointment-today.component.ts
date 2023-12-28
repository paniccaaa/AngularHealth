import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { AppointmentEventService } from 'src/app/shared/services/appointment-event/appointment-event.service';
import { AppointmentsService } from 'src/app/modules/appointments-schedule/services/appointments/appointments.service';
import { DoctorsService } from 'src/app/modules/home/services/doctors/doctors.service';
import { IAppointment } from 'src/app/shared/interfaces/appointment';
import { IDoctor } from 'src/app/shared/interfaces/doctor';

@Component({
  selector: 'app-appointment-today',
  templateUrl: './appointment-today.component.html',
  styleUrls: ['./appointment-today.component.scss'],
})
export class AppointmentTodayComponent implements OnInit, OnDestroy {
  @Input() eventTime: string = 'Upcoming';
  @Input() appointment!: IAppointment;
  @Input() doctorId!: number;
  private unsubscribe$ = new Subject<void>();
  doctor?: IDoctor;

  constructor(
    private doctorsService: DoctorsService,
    private appointmentsService: AppointmentsService,
    private appointmentEventService: AppointmentEventService
  ) {}

  ngOnInit() {
    this.loadDoctor();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  loadDoctor() {
    this.doctorsService
      .getDoctorById(this.doctorId.toString())
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (res) => (this.doctor = res),
        error: (err) =>
          console.log('при получении доктора произошла ошибка: ', err),
      });
  }

  cancelAppointment() {
    this.appointmentsService.cancelAppointment(this.appointment.id).subscribe({
      next: () => {
        this.appointmentEventService.triggerAppointmentEvent();
      },
      error: (err) => console.log('при отмене встречи произошла ошибка: ', err),
    });
  }

  completeAppointment() {
    this.appointmentsService
      .completeAppointment(this.appointment.id)
      .subscribe({
        next: () => {
          this.appointmentEventService.triggerAppointmentEvent();
        },
        error: (err) =>
          console.log('при завершении встречи произошла ошибка: ', err),
      });
  }
}
