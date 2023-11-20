import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsScheduleComponent } from './appointments-schedule.component';

describe('AppointmentsComponent', () => {
  let component: AppointmentsScheduleComponent;
  let fixture: ComponentFixture<AppointmentsScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentsScheduleComponent],
    });
    fixture = TestBed.createComponent(AppointmentsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
