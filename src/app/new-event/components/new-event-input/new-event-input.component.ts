import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-event-input',
  templateUrl: './new-event-input.component.html',
  styleUrls: ['./new-event-input.component.scss']
})
export class NewEventInputComponent implements OnInit {
  public endDateEnabled = false;

  constructor() { }

  ngOnInit() {
  }

}
