import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/pages/appointments/appointments.component';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  private baseUrl = `https://808ad2a997f895b8.mokky.dev/appointments`;

  constructor(private http: HttpClient) {}

  getAllAppointments() {
    return this.http.get<Appointment[]>(this.baseUrl);
  }
}
