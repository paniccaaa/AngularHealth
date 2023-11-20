import { Component } from '@angular/core';

@Component({
  selector: 'app-appointments-schedule',
  templateUrl: './appointments-schedule.component.html',
  styleUrls: ['./appointments-schedule.component.scss'],
})
export class AppointmentsScheduleComponent {
  statuses = ['upcoming', 'complete', 'cancel'];
  doctors = [1, 2, 3, 4, 5, 6, 7, 8];
}
