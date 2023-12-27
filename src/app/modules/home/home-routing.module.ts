import { RouterModule, Routes } from '@angular/router';

import { DoctorDetailsComponent } from './pages/doctor-details/doctor-details.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { UsersReviewsComponent } from './pages/users-reviews/users-reviews.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'doctor/:id',
    component: DoctorDetailsComponent,
  },
  {
    path: 'doctor/id/rewievs',
    component: UsersReviewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
