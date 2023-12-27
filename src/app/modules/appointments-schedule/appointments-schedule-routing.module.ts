import { RouterModule, Routes } from '@angular/router';

import { AppointmentsScheduleComponent } from './pages/appointments-schedule/appointments-schedule.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsScheduleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsScheduleRoutingModule {}
