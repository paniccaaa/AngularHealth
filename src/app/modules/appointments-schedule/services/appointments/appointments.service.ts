import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/modules/appointments/pages/appointments/appointments.component';
import { UserService } from '../../../../shared/services/user/user.service';
import { AppointmentWithoutId } from 'src/app/modules/home/pages/doctor-details/doctor-details.component';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  private baseUrl = `https://808ad2a997f895b8.mokky.dev/appointments`;

  constructor(private http: HttpClient, private userService: UserService) {}

  getAppointmentsByParams(status: string) {
    return this.http.get<Appointment[]>(
      `${this.baseUrl}?user_id=${this.userService.user.id}&status=${status}`
    );
  }

  bookAppointment(appointment: AppointmentWithoutId) {
    return this.http.post<Appointment>(this.baseUrl, appointment);
  }

  completeAppointment(id: number) {
    const pieceUpdatedStatus = { status: 'completed' };
    return this.http.patch<Appointment>(
      `${this.baseUrl}/${id}`,
      pieceUpdatedStatus
    );
  }

  cancelAppointment(id: number) {
    const pieceUpdatedStatus = { status: 'canceled' };
    return this.http.patch<Appointment>(
      `${this.baseUrl}/${id}`,
      pieceUpdatedStatus
    );
  }
}
