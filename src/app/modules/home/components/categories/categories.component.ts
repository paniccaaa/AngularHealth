import { Component, OnInit } from '@angular/core';

import { CategoryService } from 'src/app/modules/home/services/category/category.service';
import { ICategory } from 'src/app/shared/interfaces/category';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  private _selectedCategoryIndex: number = 0;
  categories: ICategory[] = [];
  selectedCategoryValue?: string = '';

  sortState = { direction: '', active: '' };
  doctorValue = '';

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
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

    this.categoryService.notifyFilterChange();
  }

  onDoctorInputChanged() {
    this.categoryService.setSelectedParams(
      this.sortState,
      this.selectedCategoryValue,
      this.doctorValue
    );

    this.categoryService.notifyFilterChange();
  }

  onDoctorInputClear() {
    this.doctorValue = '';
    this.onDoctorInputChanged();
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

    this.categoryService.notifyFilterChange();
  }
}
