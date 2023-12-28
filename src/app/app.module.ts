import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppointmentEventService } from './shared/services/appointment-event/appointment-event.service';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { AppointmentsScheduleModule } from './modules/appointments-schedule/appointments-schedule.module';
import { AuthModule } from './modules/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HomeModule } from './modules/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material-module';
import { MenubarComponent } from './shared/components/menubar/menubar.component';
import { NgModule } from '@angular/core';
import { UserProfileModule } from './modules/user-profile/user-profile.module';
import { UserService } from './shared/services/user/user.service';

@NgModule({
  declarations: [AppComponent, MenubarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService, AppointmentEventService],
  bootstrap: [AppComponent],
})
export class AppModule {}
