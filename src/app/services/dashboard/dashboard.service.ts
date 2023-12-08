import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../doctors/doctors.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private baseUrl = 'https://808ad2a997f895b8.mokky.dev/doctors';

  constructor(private http: HttpClient) {}

  addDoctor(doctor: Doctor) {
    return this.http.post(`${this.baseUrl}`, doctor);
  }

  editDoctor(id: string, doctor: Doctor) {
    return this.http.patch(`${this.baseUrl}/${id}`, doctor);
  }

  deleteDoctor(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
