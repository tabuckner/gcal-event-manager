import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { CalendarService } from './core/services/calendar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gcal-event-manager';

  constructor(public auth: AuthService,
    public calendar: CalendarService) { }
}
