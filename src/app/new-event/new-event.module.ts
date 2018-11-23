import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEventComponent } from './pages/new-event/new-event.component';
import { NewEventInputComponent } from './components/new-event-input/new-event-input.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSlideToggleModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewEventComponent, NewEventInputComponent],
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
