import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { MaterialModule } from './material-module';
import { AuthComponent } from './pages/auth/auth.component';
import { AppointmentsScheduleComponent } from './pages/appointments-schedule/appointments-schedule.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorCardComponent } from './components/doctor-card/doctor-card.component';
import { DoctorDetailsComponent } from './pages/doctor-details/doctor-details.component';
import { AppointmentTodayComponent } from './components/appointment-today/appointment-today.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DoctorsListComponent } from './pages/doctors-list/doctors-list.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorsService } from './services/doctors/doctors.service';
import { CategoryService } from './services/category/category.service';
import { AppointmentsService } from './services/appointments/appointments.service';
import { DashboardService } from './services/dashboard/dashboard.service';
import { UserService } from './services/user/user.service';
import { authGuard } from './guards/auth/auth.guard';

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
    DoctorsListComponent,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

 

