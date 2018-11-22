import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/core/services/calendar.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit {

  constructor(public calendar: CalendarService) { }

  ngOnInit() {
  }

}
