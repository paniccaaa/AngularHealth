import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';

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
}
