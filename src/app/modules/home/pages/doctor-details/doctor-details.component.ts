import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, map, startWith } from 'rxjs';

import { AppointmentsService } from 'src/app/modules/appointments-schedule/services/appointments/appointments.service';
import { DoctorsService } from 'src/app/modules/home/services/doctors/doctors.service';
import { FormControl } from '@angular/forms';
import { IAppointmentWithoutId } from 'src/app/shared/interfaces/appointment';
import { IDoctor } from 'src/app/shared/interfaces/doctor';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { UserService } from 'src/app/shared/services/user/user.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss'],
})
export class DoctorDetailsComponent implements OnInit {
  doctor?: IDoctor;
  selected: Date | string | null = '';
  formattedDate: string = '';
  selectedTime: string = '';
  myControl = new FormControl('');
  filteredOptions?: Observable<string[] | undefined>;

  constructor(
    private appointmentsService: AppointmentsService,
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
    const appointment: IAppointmentWithoutId = {
      user_id: this.userService.user.id,
      user_name: this.userService.user.fullName,
      doctor_id: this.doctor?.id || -1,
      doctor_name: this.doctor?.name || '',
      date: this.formattedDate,
      time: this.selectedTime,
      status: 'upcoming',
    };

    this.appointmentsService.bookAppointment(appointment).subscribe({
      next: () => {
        alert('Successfully booked appointment!');
        this.router.navigate(['']);
      },
      error: (err) => console.log('err user booking appointment: ', err),
    });
  }
}
