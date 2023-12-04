import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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

  private filterChangeSubject = new BehaviorSubject<void>(undefined);

  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get<Category[]>(
      `https://808ad2a997f895b8.mokky.dev/specializations`
    );
  }

  notifyFilterChange() {
    this.filterChangeSubject.next();
  }

  // Observable для отслеживания изменений фильтров
  onFilterChange(): Observable<void> {
    return this.filterChangeSubject.asObservable();
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
