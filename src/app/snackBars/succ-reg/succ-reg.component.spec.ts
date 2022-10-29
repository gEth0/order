import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccRegComponent } from './succ-reg.component';

describe('SuccRegComponent', () => {
  let component: SuccRegComponent;
  let fixture: ComponentFixture<SuccRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
