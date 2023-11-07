import {Component, OnInit} from '@angular/core';
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { formatDate } from '@angular/common';
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {
  selected!: Date | string | null;
  formattedDate: string = '';
  selectedTime: string = '';
  myControl = new FormControl('');
  options: string[] = ['9:00 AM', '10:00 AM', '11:00 AM'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
