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
import { NewDoctorComponent } from './pages/new-doctor/new-doctor.component';
import { DoctorsListComponent } from './pages/doctors-list/doctors-list.component';

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
    NewDoctorComponent,
    DoctorsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

 

