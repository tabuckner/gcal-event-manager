import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRecurrenceComponent } from './custom-recurrence.component';

describe('CustomRecurrenceComponent', () => {
  let component: CustomRecurrenceComponent;
  let fixture: ComponentFixture<CustomRecurrenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomRecurrenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRecurrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
