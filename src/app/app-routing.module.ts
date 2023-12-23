import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { UserProfileComponent } from './modules/user-profile/pages/user-profile/user-profile.component';
import { AuthComponent } from './modules/auth/pages/auth/auth.component';
import { AppointmentsScheduleComponent } from './modules/appointments-schedule/pages/appointments-schedule/appointments-schedule.component';
import { DoctorDetailsComponent } from './modules/home/pages/doctor-details/doctor-details.component';
import { UsersReviewsComponent } from './modules/home/pages/users-reviews/users-reviews.component';
import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';
import { AppointmentsComponent } from './modules/appointments/pages/appointments/appointments.component';
import { authGuard } from './shared/guards/auth/auth.guard';
import { adminGuard } from './shared/guards/admin/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    component: UserProfileComponent,
  },
  { path: 'auth', component: AuthComponent },
  {
    path: 'appointments-schedule',
    canActivate: [authGuard],
    component: AppointmentsScheduleComponent,
  },
  {
    path: 'doctor/:id',
    component: DoctorDetailsComponent,
  },
  {
    path: 'doctor/id/rewievs',
    component: UsersReviewsComponent,
  },
  {
    path: 'dashboard',
    canActivate: [authGuard, adminGuard],
    component: DashboardComponent,
  },
  {
    path: 'appointments',
    canActivate: [authGuard, adminGuard],
    component: AppointmentsComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
