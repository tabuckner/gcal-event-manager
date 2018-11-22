import { TestBed } from '@angular/core/testing';

import { CalendarService } from './calendar.service';
import { CoreModule } from '../core.module';

describe('CalendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [CoreModule.forRoot()],
  }));

  it('should be created', () => {
    const service: CalendarService = TestBed.get(CalendarService);
    expect(service).toBeTruthy();
  });
});
