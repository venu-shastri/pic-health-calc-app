import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiDashbaordComponent } from './bmi-dashbaord.component';

describe('BmiDashbaordComponent', () => {
  let component: BmiDashbaordComponent;
  let fixture: ComponentFixture<BmiDashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiDashbaordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
