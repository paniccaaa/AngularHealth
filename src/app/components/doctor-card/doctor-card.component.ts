import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Doctor } from 'src/app/services/doctors/doctors.service';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss'],
})
export class DoctorCardComponent {
  @Input({ required: true }) doctorInfo?: Doctor;
  constructor(private router: Router) {}
  navigateToDetails() {
    this.router.navigate([`doctor/${this.doctorInfo?.id}`]);
  }
}
