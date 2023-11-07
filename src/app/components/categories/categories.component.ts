import { Component } from '@angular/core';

export interface Category {
  title: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories: Category[] = [
    {title: 'All'},
    {title: 'Cardio'},
    {title: 'Dermatology'},
    {title: 'General'},
    {title: 'Dental'},
    {title: 'Gynecology'}
  ];

  selectedCategoryIndex: number = 0;
}
