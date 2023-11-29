import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Category {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  selectedCategory?: string = '';
  doctorValue: string = '';

  sortState = { direction: '', active: '' };

  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get<Category[]>(
      `https://808ad2a997f895b8.mokky.dev/specializations`
    );
  }

  setSelectedParams(
    sortState: { direction: string; active: string },
    category: string | undefined,
    doctorValue: string
  ) {
    this.sortState = sortState;
    this.selectedCategory = category;
    this.doctorValue = doctorValue;
  }
}
