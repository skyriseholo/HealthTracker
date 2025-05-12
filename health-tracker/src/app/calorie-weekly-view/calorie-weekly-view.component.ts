import { Component } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { CalorieInputComponent } from '../calorie-input/calorie-input.component';
import { WeekViewComponent } from '../week-view/week-view.component';
@Component({
  selector: 'app-calorie-weekly-view',
  imports: [ClarityModule, CalorieInputComponent, WeekViewComponent],
  templateUrl: './calorie-weekly-view.component.html',
  styleUrl: './calorie-weekly-view.component.css'
})
export class CalorieWeeklyViewComponent {
  calorieBudget = 0
  updateCalories(calories: number) {
    this.calorieBudget = calories;
  }
}
