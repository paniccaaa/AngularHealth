import { HttpClient } from '@angular/common/http';
import { IAppointment } from 'src/app/shared/interfaces/appointment';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardAppointmentsService {
  private baseUrl = `${environment.apiUrl}/appointments`;

  constructor(private http: HttpClient) {}

  getAllAppointments() {
    return this.http.get<IAppointment[]>(this.baseUrl);
  }
}
