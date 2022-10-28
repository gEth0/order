import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSnackComponent } from './payment-snack.component';

describe('PaymentSnackComponent', () => {
  let component: PaymentSnackComponent;
  let fixture: ComponentFixture<PaymentSnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSnackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
