import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEventComponent } from './pages/new-event/new-event.component';
import { NewEventInputComponent } from './components/new-event-input/new-event-input.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSlideToggleModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CustomRecurrenceComponent } from './components/custom-recurrence/custom-recurrence.component';
import { RecurrenceComponent } from './components/recurrence/recurrence.component';

@NgModule({
  declarations: [NewEventComponent, NewEventInputComponent, CustomRecurrenceComponent, RecurrenceComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSlideToggleModule
  ]
})
export class NewEventModule { }
