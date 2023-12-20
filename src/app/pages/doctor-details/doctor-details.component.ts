import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { formatDate } from '@angular/common';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import {
  Doctor,
  DoctorsService,
} from 'src/app/services/doctors/doctors.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { AppointmentsService } from 'src/app/services/appointments/appointments.service';

export interface AppointmentWithoutId {
  user_id: number;
  user_name: string;
  doctor_id: number;
  doctor_name: string;
  date: string;
  time: string;
  status: string;
}

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss'],
})
export class DoctorDetailsComponent implements OnInit {
  doctor?: Doctor;
  selected: Date | string | null = '';
  formattedDate: string = '';
  selectedTime: string = '';
  myControl = new FormControl('');
  filteredOptions?: Observable<string[] | undefined>;

  constructor(
    private appointmentService: AppointmentsService,
    private doctorsService: DoctorsService,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
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
    if (this.selected instanceof Date) {
      this.formattedDate = formatDate(
        this.selected,
        'EEEE, MM/dd/yyyy',
        'en-US'
      );
    } else {
      this.formattedDate = '';
    }
  }

  bookAppointment() {
    const appointment: AppointmentWithoutId = {
      user_id: this.userService.user.data.id,
      user_name: this.userService.user.data.fullName,
      doctor_id: this.doctor?.id || -1,
      doctor_name: this.doctor?.name || '',
      date: this.formattedDate,
      time: this.selectedTime,
      status: 'upcoming',
    };

    this.appointmentService.bookAppointment(appointment).subscribe({
      next: () => {
        alert('Successfully booked appointment!');
        this.router.navigate(['']);
      },
      error: (err) => console.log('err user booking appointment: ', err),
    });
  }
}
