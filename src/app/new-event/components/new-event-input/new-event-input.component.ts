import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-event-input',
  templateUrl: './new-event-input.component.html',
  styleUrls: ['./new-event-input.component.scss']
})
export class NewEventInputComponent implements OnInit {
  newEventForm = this.fb.group({
    name: ['Ass Ass Ass'],
    description: [''],
    startDate: [''],
    endDateEnabled: [true],
    endDate: [''],
    repeat: ['custom'],
    customRepeatQuantity: [1],
    customRepeatInterval: ['week'],
    customRepeatDays: this.fb.array([
      { label: 'sunday', checked: true },
      { label: 'monday', checked: false },
      { label: 'tuesday', checked: false },
      { label: 'wednesday', checked: true },
      { label: 'thursday', checked: false },
      { label: 'friday', checked: false },
      { label: 'saturday', checked: false },
    ])
  });
  public endDateEnabled = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.onChanges();
  }

  onChanges() {
    this.newEventForm.valueChanges.subscribe((c) => {
      console.log(c);
    });
  }

}
