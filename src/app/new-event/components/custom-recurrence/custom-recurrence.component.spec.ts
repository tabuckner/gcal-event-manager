import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRecurrenceComponent } from './custom-recurrence.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatFormFieldModule, MatCheckboxModule, MatSelectModule, MatInputModule } from '@angular/material';
import { RecurrenceDayPickerComponent } from '../recurrence-day-picker/recurrence-day-picker.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CustomRecurrenceComponent', () => {
  let component: CustomRecurrenceComponent;
  let fixture: ComponentFixture<CustomRecurrenceComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomRecurrenceComponent, RecurrenceDayPickerComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatSelectModule,
        MatInputModule,
        NoopAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRecurrenceComponent);
    component = fixture.componentInstance;
    component.parentForm = formBuilder.group({
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
