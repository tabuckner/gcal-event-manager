import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/authentication/auth.service';
import { CalendarService } from '../core/services/calendar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService,
    public calendar: CalendarService) { }

  ngOnInit() {
  }

}
