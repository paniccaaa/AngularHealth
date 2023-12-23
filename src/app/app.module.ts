import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { UserProfileComponent } from './modules/user-profile/pages/user-profile/user-profile.component';
import { MenubarComponent } from './shared/components/menubar/menubar.component';
import { MaterialModule } from './material-module';
import { AuthComponent } from './modules/auth/pages/auth/auth.component';
import { AppointmentsScheduleComponent } from './modules/appointments-schedule/pages/appointments-schedule/appointments-schedule.component';
import { CategoriesComponent } from './modules/home/components/categories/categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorCardComponent } from './modules/home/components/doctor-card/doctor-card.component';
import { DoctorDetailsComponent } from './modules/home/pages/doctor-details/doctor-details.component';
import { AppointmentTodayComponent } from './modules/appointments-schedule/components/appointment-today/appointment-today.component';
import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';
import { AppointmentsComponent } from './modules/appointments/pages/appointments/appointments.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorsService } from './modules/home/services/doctors/doctors.service';
import { CategoryService } from './modules/home/services/category/category.service';
import { AppointmentsService } from './modules/appointments-schedule/services/appointments/appointments.service';
import { DashboardService } from './modules/dashboard/services/dashboard/dashboard.service';
import { UserService } from './shared/services/user/user.service';
import { authGuard } from './shared/guards/auth/auth.guard';
import { AppointmentEventService } from './shared/services/appointment-event/appointment-event.service';

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

 

