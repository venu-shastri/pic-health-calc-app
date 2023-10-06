import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsCalcComponent } from './kids-calc.component';

describe('KidsCalcComponent', () => {
  let component: KidsCalcComponent;
  let fixture: ComponentFixture<KidsCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
