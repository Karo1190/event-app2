import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventCategory, EventDto } from '../model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  formGroup!: FormGroup;
  eventCategories = EventCategory;
  eventsGroupedByCategory: { [key: string]: EventDto[] } = {};

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEventsGroupedByCategory().subscribe((eventsGrouped) => {
      this.eventsGroupedByCategory = eventsGrouped;
    });
    this.formGroup = new FormGroup({
      text: new FormControl<string | null>(null),
    });
  }

}
