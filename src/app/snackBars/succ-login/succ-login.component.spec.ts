import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccLoginComponent } from './succ-login.component';

describe('SuccLoginComponent', () => {
  let component: SuccLoginComponent;
  let fixture: ComponentFixture<SuccLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
