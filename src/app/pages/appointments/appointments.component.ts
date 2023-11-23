import { Component } from '@angular/core';

export interface Appointment {
  id: number;
  user_id: number;
  user_name: string;
  doctor_id: number;
  doctor_name: string;
  date: string;
  time: string;
  status: string;
}

const ELEMENT_DATA: Appointment[] = [
  {
    id: 1,
    user_id: 1,
    user_name: 'Amanda Wang',
    doctor_id: 1,
    doctor_name: 'Dr. Wendy Yii',
    date: '2021-07-13',
    time: '10:00 AM',
    status: 'canceled',
  },
  {
    id: 2,
    user_id: 1,
    user_name: 'Amanda Wang',
    doctor_id: 1,
    doctor_name: 'Dr. Wendy Yii',
    date: '2021-09-15',
    time: '9:30 AM',
    status: 'upcoming',
  },
  {
    id: 3,
    user_id: 1,
    user_name: 'Amanda Wang',
    doctor_id: 1,
    doctor_name: 'Dr. Wendy Yii',
    date: '2021-08-14',
    time: '10:30 AM',
    status: 'completed',
  },
];

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentsComponent {
  displayedColumns: string[] = [
    'id',
    'user_name',
    'doctor_name',
    'date',
    'time',
    'status',
  ];
  dataSource = ELEMENT_DATA;
}
