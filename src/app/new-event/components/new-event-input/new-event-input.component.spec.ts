import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventInputComponent } from './new-event-input.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatInputModule
} from '@angular/material';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecurrenceComponent } from '../recurrence/recurrence.component';
import { CustomRecurrenceComponent } from '../custom-recurrence/custom-recurrence.component';
import { RecurrenceDayPickerComponent } from '../recurrence-day-picker/recurrence-day-picker.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('NewEventInputComponent', () => {
  let component: NewEventInputComponent;
  let fixture: ComponentFixture<NewEventInputComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewEventInputComponent,
        RecurrenceComponent,
        CustomRecurrenceComponent,
        RecurrenceDayPickerComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatInputModule,
        NoopAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventInputComponent);
    component = fixture.componentInstance;
    component.newEventForm = formBuilder.group({
      name: ['Ass Ass Ass'],
      description: [''],
      startDate: [''],
      endDateEnabled: [true],
      endDate: [''],
      repeat: ['custom'],
      customRepeatQuantity: [1],
      customRepeatInterval: ['week'],
      customRepeatDays: formBuilder.array([
        { label: 'sunday', checked: true },
        { label: 'monday', checked: false },
        { label: 'tuesday', checked: false },
        { label: 'wednesday', checked: true },
        { label: 'thursday', checked: false },
        { label: 'friday', checked: false },
        { label: 'saturday', checked: false },
      ])
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
