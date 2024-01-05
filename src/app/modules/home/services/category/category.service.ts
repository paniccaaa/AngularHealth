import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { ICategory } from 'src/app/shared/interfaces/category';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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
    return this.http.get<ICategory[]>(
      `https://808ad2a997f895b8.mokky.dev/specializations`
    );
  }

  notifyFilterChange() {
    this.filterChangeSubject.next();
  }

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
