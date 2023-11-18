import { Component } from '@angular/core';

export interface Category {
  title: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories: Category[] = [
    { title: 'All' },
    { title: 'Cardiology' },
    { title: 'Dermatology' },
    { title: 'General' },
    { title: 'Dentalogy' },
    { title: 'Gynecology' },
  ];

  selectedCategoryIndex: number = 0;

  value = 'Dr Dre';
}
