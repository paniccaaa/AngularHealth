import { HttpClient } from '@angular/common/http';
import { IAppointment } from 'src/app/shared/interfaces/appointment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardAppointmentsService {
  private baseUrl = `https://808ad2a997f895b8.mokky.dev/appointments`;

  constructor(private http: HttpClient) {}

  getAllAppointments() {
    return this.http.get<IAppointment[]>(this.baseUrl);
  }
}
