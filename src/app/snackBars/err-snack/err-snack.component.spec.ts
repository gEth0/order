import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrSnackComponent } from './err-snack.component';

describe('ErrSnackComponent', () => {
  let component: ErrSnackComponent;
  let fixture: ComponentFixture<ErrSnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrSnackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
