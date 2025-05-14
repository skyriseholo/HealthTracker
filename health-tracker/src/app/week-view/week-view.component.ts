import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { DayCardComponent } from '../day-card/day-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-week-view',
  imports: [ClarityModule, DayCardComponent, NgFor],
  templateUrl: './week-view.component.html',
  styleUrl: './week-view.component.css'
})
export class WeekViewComponent {

  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  caloriesConsumed: { [key: string]: number } = {};

  @Output() totalCaloriesConsumedEvent = new EventEmitter<number>();
  @Input() calorieBudget = 0;

  update(caloriesConsumedEvent: any) {
    this.caloriesConsumed[caloriesConsumedEvent.day] = parseInt(caloriesConsumedEvent.calories);
    this.calculateTotalCaloriesConsumed();
  }

  calculateTotalCaloriesConsumed() {
    let totalCalsConsumed = 0
    for(const key in this.caloriesConsumed){
      totalCalsConsumed += this.caloriesConsumed[key]
    }

    this.totalCaloriesConsumedEvent.emit(totalCalsConsumed);
  }
}
