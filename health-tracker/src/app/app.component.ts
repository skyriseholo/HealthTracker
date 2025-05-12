import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalorieWeeklyViewComponent } from './calorie-weekly-view/calorie-weekly-view.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalorieWeeklyViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'health-tracker';
}
