import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recurrence',
  templateUrl: './recurrence.component.html',
  styleUrls: ['./recurrence.component.scss']
})
export class RecurrenceComponent implements OnInit {
  @Input() public parentForm: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log(this.parentForm);
  }

}
