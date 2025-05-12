import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieWeeklyViewComponent } from './calorie-weekly-view.component';

describe('CalorieWeeklyViewComponent', () => {
  let component: CalorieWeeklyViewComponent;
  let fixture: ComponentFixture<CalorieWeeklyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalorieWeeklyViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalorieWeeklyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
