import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieInputComponent } from './calorie-input.component';

describe('CalorieInputComponent', () => {
  let component: CalorieInputComponent;
  let fixture: ComponentFixture<CalorieInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalorieInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalorieInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
