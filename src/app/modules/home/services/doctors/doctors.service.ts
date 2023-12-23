import { HttpClient } from '@angular/common/http';
import { IDoctor } from 'src/app/shared/interfaces/doctor';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  private baseUrl = `https://808ad2a997f895b8.mokky.dev/doctors`;

  constructor(private http: HttpClient) {}

  getAllDoctors() {
    return this.http.get<IDoctor[]>(this.baseUrl);
  }

  getDoctorById(id: string) {
    return this.http.get<IDoctor>(`${this.baseUrl}/${id}`);
  }

  getDoctorsByFilter(
    speciality: string | undefined,
    name: string,
    mark: string,
    sortItem: string
  ) {
    const specialityParam =
      speciality === 'All' ? '' : `speciality=${speciality}`;

    const nameParam = `name=*${encodeURIComponent(name)}`;

    const sortByParam = `sortBy=${
      (mark === 'asc' ? '' : '-') + encodeURIComponent(sortItem)
    }`;

    const queryParams = [specialityParam, nameParam, sortByParam]
      .filter((param) => param !== '')
      .join('&');

    const url = `${this.baseUrl}?${queryParams}`;

    return this.http.get<IDoctor[]>(url);
  }
}