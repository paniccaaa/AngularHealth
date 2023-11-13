import { Component } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent {
  statuses = ['upcoming', 'complete', 'cancel']
  doctors = [1, 2, 3, 4, 5, 6, 7, 8]
}
