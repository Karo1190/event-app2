import { Component, OnInit } from '@angular/core';
import { EventCategory, EventDto } from '../model';
import { EventApiService } from '../services/event-api.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent implements OnInit {
  eventCategories = EventCategory;
  events: EventDto[] = [];

  constructor(private eventApiService: EventApiService) {}

  ngOnInit(): void {
    this.eventApiService.getEvent().subscribe((events) => {
      this.events = events;
    });
  }
}
