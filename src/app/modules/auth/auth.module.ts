import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './pages/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material-module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
