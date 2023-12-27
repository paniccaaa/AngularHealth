import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryService } from './services/category/category.service';
import { CommonModule } from '@angular/common';
import { DoctorCardComponent } from './components/doctor-card/doctor-card.component';
import { DoctorDetailsComponent } from './pages/doctor-details/doctor-details.component';
import { DoctorsService } from './services/doctors/doctors.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/material-module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CategoriesComponent,
    DoctorCardComponent,
    DoctorDetailsComponent,
    HomeComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, FormsModule],
  providers: [CategoryService, DoctorsService],
})
export class HomeModule {}
