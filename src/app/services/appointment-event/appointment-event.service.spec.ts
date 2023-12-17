import { TestBed } from '@angular/core/testing';

import { AppointmentEventService } from './appointment-event.service';

describe('AppointmentEventService', () => {
  let service: AppointmentEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
