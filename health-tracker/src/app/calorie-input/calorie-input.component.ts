import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular'

@Component({
  selector: 'app-calorie-input',
  imports: [ClarityModule, FormsModule],
  templateUrl: './calorie-input.component.html',
  styleUrl: './calorie-input.component.css'
})
export class CalorieInputComponent {
  calories = 0;
  @Output() caloriesEvent = new EventEmitter<number>();
  updateCalories(){
    this.caloriesEvent.emit(this.calories);
  }
}
