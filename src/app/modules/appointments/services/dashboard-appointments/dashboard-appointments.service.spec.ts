import { TestBed } from '@angular/core/testing';

import { DashboardAppointmentsService } from './dashboard-appointments.service';

describe('DashboardAppointmentsService', () => {
  let service: DashboardAppointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardAppointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
