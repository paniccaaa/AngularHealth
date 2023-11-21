import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrl: './new-doctor.component.scss',
})
export class NewDoctorComponent {
  specializations = [
    { id: 1, title: 'Cardiology' },
    { id: 2, title: 'Dermatology' },
    { id: 3, title: 'General' },
    { id: 4, title: 'Dentalogy' },
    { id: 5, title: 'Gynecology' },
  ];
  selectedSpecialization = '';

  timings = new FormControl('');
  timingsList: string[] = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
  ];
}
