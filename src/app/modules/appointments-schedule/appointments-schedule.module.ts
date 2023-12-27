import { AppointmentTodayComponent } from './components/appointment-today/appointment-today.component';
import { AppointmentsScheduleComponent } from './pages/appointments-schedule/appointments-schedule.component';
import { AppointmentsScheduleRoutingModule } from './appointments-schedule-routing.module';
import { AppointmentsService } from './services/appointments/appointments.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material-module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppointmentTodayComponent, AppointmentsScheduleComponent],
  imports: [CommonModule, MaterialModule, AppointmentsScheduleRoutingModule],
  providers: [AppointmentsService],
})
export class AppointmentsScheduleModule {}
