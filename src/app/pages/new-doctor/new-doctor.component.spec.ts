import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDoctorComponent } from './new-doctor.component';

describe('NewDoctorComponent', () => {
  let component: NewDoctorComponent;
  let fixture: ComponentFixture<NewDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
