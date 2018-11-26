import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventComponent } from './new-event.component';
import { CoreModule } from 'src/app/core/core.module';
import { NewEventInputComponent } from '../../components/new-event-input/new-event-input.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatInputModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecurrenceComponent } from '../../components/recurrence/recurrence.component';
import { CustomRecurrenceComponent } from '../../components/custom-recurrence/custom-recurrence.component';
import { RecurrenceDayPickerComponent } from '../../components/recurrence-day-picker/recurrence-day-picker.component';

describe('NewEventComponent', () => {
  let component: NewEventComponent;
  let fixture: ComponentFixture<NewEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewEventComponent,
        NewEventInputComponent,
        RecurrenceComponent,
        CustomRecurrenceComponent,
        RecurrenceDayPickerComponent
      ],
      imports: [
        CoreModule.forRoot(),
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatInputModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
