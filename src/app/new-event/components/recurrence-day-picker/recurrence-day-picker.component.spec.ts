import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurrenceDayPickerComponent } from './recurrence-day-picker.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';

describe('RecurrenceDayPickerComponent', () => {
  let component: RecurrenceDayPickerComponent;
  let fixture: ComponentFixture<RecurrenceDayPickerComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurrenceDayPickerComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurrenceDayPickerComponent);
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
