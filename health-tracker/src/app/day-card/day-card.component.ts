import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-day-card',
  imports: [ClarityModule, FormsModule],
  templateUrl: './day-card.component.html',
  styleUrl: './day-card.component.css'
})
export class DayCardComponent {
  @Input() dayLabel = "Monday"
  @Input() calorieBudget = 2000
  @Output() caloriesConsumedEvent = new EventEmitter();

  caloriesConsumed = 0
  caloriesConsumedInput = this.caloriesConsumed;
  caloriesRemaining = this.calorieBudget - this.caloriesConsumed

  ngOnChanges() {
    this.update()
  }

  update(){
    this.caloriesConsumed = this.caloriesConsumedInput;
    this.calculateRemainingCalories()
    this.caloriesConsumedEvent.emit({
      day: this.dayLabel,
      calories: this.caloriesConsumed
    });
  }

  calculateRemainingCalories(){
    this.caloriesRemaining = this.calorieBudget - this.caloriesConsumed;
  }
}
