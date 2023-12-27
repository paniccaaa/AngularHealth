import { RouterModule, Routes } from '@angular/router';

import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsRoutingModule {}
