import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Doctor {
  id: number;
  name: string;
  universities: string;
  patients: number;
  experience: number;
  avatar: string;
  description: string;
  speciality: string;
  timingsList: string[];
}

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  constructor(private http: HttpClient) {}

  getAllDoctors() {
    return this.http.get<Doctor[]>(
      `https://808ad2a997f895b8.mokky.dev/doctors`
    );
  }
  getDoctorById(id: string) {
    return this.http.get<Doctor>(
      `https://808ad2a997f895b8.mokky.dev/doctors/` + id
    );
  }

  getDoctorsByFilter(
    speciality: string,
    name: string,
    mark: string,
    sortItem: string
  ) {
    return this.http.get<Doctor[]>(
      `https://808ad2a997f895b8.mokky.dev/doctors?
      speciality=${speciality}
      &name=*${name}
      &sortBy=${(mark === 'asc' ? '' : '-') + sortItem}`
    );
  }
}
