import {
  IAppointment,
  IAppointmentWithoutId,
} from 'src/app/shared/interfaces/appointment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../../../../shared/services/user/user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  private baseUrl = `${environment.apiUrl}/appointments`;

  constructor(private http: HttpClient, private userService: UserService) {}

  getAppointmentsByParams(status: string) {
    return this.http.get<IAppointment[]>(
      `${this.baseUrl}?user_id=${this.userService.user.id}&status=${status}`
    );
  }

  bookAppointment(appointment: IAppointmentWithoutId) {
    return this.http.post<IAppointment>(this.baseUrl, appointment);
  }

  completeAppointment(id: number) {
    const pieceUpdatedStatus = { status: 'completed' };
    return this.http.patch<IAppointment>(
      `${this.baseUrl}/${id}`,
      pieceUpdatedStatus
    );
  }

  cancelAppointment(id: number) {
    const pieceUpdatedStatus = { status: 'canceled' };
    return this.http.patch<IAppointment>(
      `${this.baseUrl}/${id}`,
      pieceUpdatedStatus
    );
  }
}
