import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { adminGuard } from './shared/guards/admin/admin.guard';
import { authGuard } from './shared/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./modules/user-profile/user-profile.module').then(
        (m) => m.UserProfileModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'appointments-schedule',
    canActivate: [authGuard],
    loadChildren: () =>
      import(
        './modules/appointments-schedule/appointments-schedule.module'
      ).then((m) => m.AppointmentsScheduleModule),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard, adminGuard],
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'appointments',
    canActivate: [authGuard, adminGuard],
    loadChildren: () =>
      import('./modules/appointments/appointments.module').then(
        (m) => m.AppointmentsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
