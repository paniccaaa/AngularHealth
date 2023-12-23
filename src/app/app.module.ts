import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppointmentEventService } from './shared/services/appointment-event/appointment-event.service';
import { AppointmentTodayComponent } from './modules/appointments-schedule/components/appointment-today/appointment-today.component';
import { AppointmentsComponent } from './modules/appointments/pages/appointments/appointments.component';
import { AppointmentsScheduleComponent } from './modules/appointments-schedule/pages/appointments-schedule/appointments-schedule.component';
import { AppointmentsService } from './modules/appointments-schedule/services/appointments/appointments.service';
import { AuthComponent } from './modules/auth/pages/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriesComponent } from './modules/home/components/categories/categories.component';
import { CategoryService } from './modules/home/services/category/category.service';
import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';
import { DashboardService } from './modules/dashboard/services/dashboard/dashboard.service';
import { DoctorCardComponent } from './modules/home/components/doctor-card/doctor-card.component';
import { DoctorDetailsComponent } from './modules/home/pages/doctor-details/doctor-details.component';
import { DoctorsService } from './modules/home/services/doctors/doctors.service';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material-module';
import { MenubarComponent } from './shared/components/menubar/menubar.component';
import { NgModule } from '@angular/core';
import { UserProfileComponent } from './modules/user-profile/pages/user-profile/user-profile.component';
import { UserService } from './shared/services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    MenubarComponent,
    AuthComponent,
    AppointmentsScheduleComponent,
    CategoriesComponent,
    DoctorCardComponent,
    DoctorDetailsComponent,
    AppointmentTodayComponent,
    DashboardComponent,
    AppointmentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    DoctorsService,
    CategoryService,
    AppointmentsService,
    DashboardService,
    UserService,
    AppointmentEventService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
