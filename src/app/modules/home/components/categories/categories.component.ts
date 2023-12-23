import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { CategoryService } from 'src/app/modules/home/services/category/category.service';

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
  private _selectedCategoryIndex: number = 0;
  categories: Category[] = [];
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
    console.log('ЭТО КОМПОНЕНТ КАТЕГОРИЙ SORT STATE:', this.sortState);
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
