import { HttpClient } from '@angular/common/http';
import { IDoctor } from 'src/app/shared/interfaces/doctor';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private baseUrl = `${environment.apiUrl}/doctors`;

  constructor(private http: HttpClient) {}

  addDoctor(doctor: IDoctor) {
    return this.http.post(`${this.baseUrl}`, doctor);
  }

  editDoctor(id: string, doctor: IDoctor) {
    return this.http.patch(`${this.baseUrl}/${id}`, doctor);
  }

  deleteDoctor(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
