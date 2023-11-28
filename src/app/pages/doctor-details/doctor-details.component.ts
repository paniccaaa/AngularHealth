import { Component, Input, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { formatDate } from '@angular/common';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith, switchMap } from 'rxjs';
import {
  Doctor,
  DoctorsService,
} from 'src/app/services/doctors/doctors.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss'],
})
export class DoctorDetailsComponent implements OnInit {
  doctor?: Doctor;
  selected!: Date | string | null;
  formattedDate: string = '';
  selectedTime: string = '';
  myControl = new FormControl('');
  //options?: string[];
  filteredOptions?: Observable<string[] | undefined>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private doctorsService: DoctorsService
  ) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );

    const id = this.route.snapshot.paramMap.get('id')!;

    this.doctorsService.getDoctorById(id).subscribe({
      next: (res) => (this.doctor = res),
      error: (e) => console.log('При получении доктора произошла ошибка:', e),
    });
  }

  private _filter(value: string): string[] | undefined {
    const filterValue = value.toLowerCase();

    return this.doctor?.timingsList.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
  onDateChange(event: MatDatepickerInputEvent<Date>) {
    this.selected = event.value;
    this.formatDate();
  }

  formatDate() {
    if (this.selected) {
      this.selected = formatDate(this.selected, 'EEEE, MM/dd/yyyy', 'en-US');
    } else {
      this.selected = '';
    }
  }
}
