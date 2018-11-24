import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recurrence-day-picker',
  templateUrl: './recurrence-day-picker.component.html',
  styleUrls: ['./recurrence-day-picker.component.scss']
})
export class RecurrenceDayPickerComponent implements OnInit {
  @Input() public parentForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  handleCheckboxChange(i: number) {
    const customDays = this.parentForm.get('customRepeatDays');
    const values = customDays.value;
    values[i].checked = !values[i].checked;
    customDays.setValue(values);
  }

}
