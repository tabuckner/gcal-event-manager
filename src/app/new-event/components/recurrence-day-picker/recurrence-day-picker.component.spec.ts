import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurrenceDayPickerComponent } from './recurrence-day-picker.component';

describe('RecurrenceDayPickerComponent', () => {
  let component: RecurrenceDayPickerComponent;
  let fixture: ComponentFixture<RecurrenceDayPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurrenceDayPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurrenceDayPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
