import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recurrence-day-picker',
  templateUrl: './recurrence-day-picker.component.html',
  styleUrls: ['./recurrence-day-picker.component.scss']
})
export class RecurrenceDayPickerComponent implements OnInit {
  days = [
    {label: 's', value: 'sunday', checked: false },
    {label: 'm', value: 'monday', checked: false },
    {label: 't', value: 'tuesday', checked: false },
    {label: 'w', value: 'wednesday', checked: false },
    {label: 't', value: 'thursday', checked: false },
    {label: 'f', value: 'friday', checked: false },
    {label: 's', value: 'saturday', checked: false },
  ];

  constructor() { }

  ngOnInit() {
  }

}
