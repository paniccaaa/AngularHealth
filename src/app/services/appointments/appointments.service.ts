import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/pages/appointments/appointments.component';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  private baseUrl = `https://808ad2a997f895b8.mokky.dev/appointments`;

  constructor(private http: HttpClient, private userService: UserService) {}

  getAllAppointments() {
    return this.http.get<Appointment[]>(this.baseUrl);
  }

  getAppointmentsByParams(status: string) {
    return this.http.get<Appointment[]>(
      `${this.baseUrl}?user_id=${this.userService.user.data.id}&status=${status}`
    );
  }

  bookAppointment(appointment: Appointment) {
    return this.http.post<Appointment>(this.baseUrl, appointment);
  }
}
