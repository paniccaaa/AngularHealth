import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {UserProfileComponent} from "./pages/user-profile/user-profile.component";
import {AuthComponent} from "./pages/auth/auth.component";
import {AppointmentsComponent} from "./pages/appointments/appointments.component";
import {DoctorDetailsComponent} from "./pages/doctor-details/doctor-details.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'appointments', component: AppointmentsComponent},
  {path: 'doctor-details', component: DoctorDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
