import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentEventService {
  private appointmentEventSource$ = new Subject<void>();

  appointmentEvent$ = this.appointmentEventSource$.asObservable();

  triggerAppointmentEvent() {
    this.appointmentEventSource$.next();
  }
}
