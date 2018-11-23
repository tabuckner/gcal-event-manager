import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-recurrence',
  templateUrl: './custom-recurrence.component.html',
  styleUrls: ['./custom-recurrence.component.scss']
})
export class CustomRecurrenceComponent implements OnInit {
  recurrenceQuantity = 1;
  recurrenceUnitValue = 'day'; // FIXME: replace with better solution when changing to reactive forms module.

  constructor() { }

  ngOnInit() {
  }

}
