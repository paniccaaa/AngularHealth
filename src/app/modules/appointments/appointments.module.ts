import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardAppointmentsService } from './services/dashboard-appointments/dashboard-appointments.service';
import { MaterialModule } from 'src/app/material-module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppointmentsComponent],
  imports: [CommonModule, AppointmentsRoutingModule, MaterialModule],
  providers: [DashboardAppointmentsService],
})
export class AppointmentsModule {}
