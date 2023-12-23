import { Component, Input } from '@angular/core';

import { IDoctor } from 'src/app/shared/interfaces/doctor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss'],
})
export class DoctorCardComponent {
  @Input({ required: true }) doctorInfo?: IDoctor;

  constructor(private router: Router) {}

  navigateToDetails() {
    this.router.navigate([`doctor/${this.doctorInfo?.id}`]);
  }
}
