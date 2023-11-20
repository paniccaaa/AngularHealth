import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {UserProfileComponent} from "./pages/user-profile/user-profile.component";
import {AuthComponent} from "./pages/auth/auth.component";
import { AppointmentsScheduleComponent } from './pages/appointments-schedule/appointments-schedule.component';
import { DoctorDetailsComponent } from './pages/doctor-details/doctor-details.component';
import { UsersReviewsComponent } from './pages/users-reviews/users-reviews.component';
import { NewDoctorComponent } from './pages/new-doctor/new-doctor.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'appointments-schedule', component: AppointmentsScheduleComponent },
  { path: 'doctor/id', component: DoctorDetailsComponent },
  { path: 'doctor/id/rewievs', component: UsersReviewsComponent },
  { path: 'new-doctor', component: NewDoctorComponent },
  { path: 'appointments', component: AppointmentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
