import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorsService } from '../doctors/doctors.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private http: HttpClient,
    private doctorsService: DoctorsService
  ) {}
}
