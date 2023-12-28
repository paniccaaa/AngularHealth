import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppointmentEventService } from './shared/services/appointment-event/appointment-event.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material-module';
import { MenubarComponent } from './shared/components/menubar/menubar.component';
import { NgModule } from '@angular/core';
import { UserService } from './shared/services/user/user.service';

@NgModule({
  declarations: [AppComponent, MenubarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [UserService, AppointmentEventService],
  bootstrap: [AppComponent],
})
export class AppModule {}
