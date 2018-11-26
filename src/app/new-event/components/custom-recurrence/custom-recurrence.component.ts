import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-recurrence',
  templateUrl: './custom-recurrence.component.html',
  styleUrls: ['./custom-recurrence.component.scss']
})
export class CustomRecurrenceComponent implements OnInit {
  @Input() public parentForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
