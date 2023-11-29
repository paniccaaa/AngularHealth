import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { CategoryService } from 'src/app/services/category/category.service';

export interface Category {
  id: number;
  title: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  private _selectedCategoryIndex: number = 0;
  selectedCategoryValue?: string = '';
  sortState = { direction: '', active: '' };

  doctorValue = '';

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe({
      next: (res) => (this.categories = [{ id: 0, title: 'All' }, ...res]),
      error: (e) => console.log('При получении категорий произошла ошибка:', e),
    });
  }

  setSortState(sort: Sort) {
    if (!sort.active || sort.direction === '') {
      this.sortState.direction = '';
      this.sortState.active = '';
      return;
    }

    this.sortState.direction = sort.direction;
    this.sortState.active = sort.active;

    this.categoryService.setSelectedParams(
      this.sortState,
      this.selectedCategoryValue,
      this.doctorValue
    );
  }

  onDoctorInputChanged() {
    this.categoryService.setSelectedParams(
      this.sortState,
      this.selectedCategoryValue,
      this.doctorValue
    );
  }

  get selectedCategoryIndex(): number {
    return this._selectedCategoryIndex;
  }

  set selectedCategoryIndex(value: number) {
    this._selectedCategoryIndex = value;
    this.selectedCategoryValue = this.categories[value].title;
    this.categoryService.setSelectedParams(
      this.sortState,
      this.selectedCategoryValue,
      this.doctorValue
    );
  }
}
