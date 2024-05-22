import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsTableComponent } from './event-details-table.component';

describe('EventDetailsTableComponent', () => {
  let component: EventDetailsTableComponent;
  let fixture: ComponentFixture<EventDetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventDetailsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
