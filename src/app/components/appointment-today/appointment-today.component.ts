import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-today',
  templateUrl: './appointment-today.component.html',
  styleUrls: ['./appointment-today.component.scss'],
})
export class AppointmentTodayComponent {
  @Input() eventTime: string = 'Upcoming';
  //eventTime = this.eventSelected;
}
