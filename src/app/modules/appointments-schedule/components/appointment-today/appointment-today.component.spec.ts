import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentTodayComponent } from './appointment-today.component';

describe('AppointmentTodayComponent', () => {
  let component: AppointmentTodayComponent;
  let fixture: ComponentFixture<AppointmentTodayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentTodayComponent]
    });
    fixture = TestBed.createComponent(AppointmentTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
