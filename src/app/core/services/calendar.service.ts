import { Injectable } from '@angular/core';
import { AuthService } from '../authentication/auth.service';

@Injectable()
export class CalendarService {
  public calendarItems: any[];

  constructor(public auth: AuthService) { }

  public async getCalendar() {
    // Using bracket notation due to TS error:
    // https://stackoverflow.com/questions/52521349/property-calendar-does-not-exist-on-type-typeof-client
    const events: { result: { items: any[] } } = await gapi.client['calendar'].events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: 'startTime'
    });

    console.log(events);
    this.calendarItems = events.result.items;
    console.log(this.calendarItems);
  }

  public async createEvent() {
    const insert = await gapi.client['calendar'].events.insert({
      calendarId: 'primary',
      start: {
        dateTime: hoursFromNow(2),
        timeZone: 'America/Los_Angeles'
      },
      end: {
        dateTime: hoursFromNow(3),
        timeZone: 'America/Los_Angeles'
      },
      summary: 'Have Fun!!!',
      description: 'Do some cool stuff and have a fun time doing it'
    });
  }
}

const hoursFromNow = (n) => new Date(Date.now() + n * 1000 * 60 * 60 ).toISOString();
