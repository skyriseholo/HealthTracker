import { Component } from '@angular/core';
import { CalorieWeeklyViewComponent } from './calorie-weekly-view/calorie-weekly-view.component';

@Component({
  selector: 'app-root',
  imports: [ CalorieWeeklyViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'health-tracker';
}