import { Component } from '@angular/core';

export interface Category {
  id: number;
  title: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  mycat: Category[] = [
    { id: 1, title: 'Cardiology' },
    { id: 2, title: 'Dermatology' },
    { id: 3, title: 'General' },
    { id: 4, title: 'Dentalogy' },
    { id: 5, title: 'Gynecology' },
  ];
  categories: Category[] = [{ id: 0, title: 'All' }, ...this.mycat];

  selectedCategoryIndex: number = 0;

  value = 'Dr Dre';
}
