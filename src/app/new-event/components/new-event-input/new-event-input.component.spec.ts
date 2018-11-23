import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventInputComponent } from './new-event-input.component';

describe('NewEventInputComponent', () => {
  let component: NewEventInputComponent;
  let fixture: ComponentFixture<NewEventInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEventInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
