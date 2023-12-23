import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Appointment } from '../../pages/appointments/appointments.component';

@Injectable({
  providedIn: 'root',
})
export class DashboardAppointmentsService {
  private baseUrl = `https://808ad2a997f895b8.mokky.dev/appointments`;

  constructor(private http: HttpClient, private userService: UserService) {}

  getAllAppointments() {
    return this.http.get<Appointment[]>(this.baseUrl);
  }
}
