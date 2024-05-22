import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { from, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import {
  filter,
  groupBy,
  map,
  mergeMap,
  reduce,
  switchMap,
  tap,
  toArray,
} from 'rxjs/operators';
import { EventCategory, EventDto } from '../model';
import { EventApiService } from '../services/event-api.service';
import { EventDetailsService } from './services/event-details.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  event$!: Observable<EventDto>;
  // events$!: Observable<EventDto[]>;

  constructor(
    private route: ActivatedRoute,
    private eventDetailsService: EventDetailsService,
    private eventApiService: EventApiService
  ) {}

  ngOnInit(): void {
    this.event$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const eventId = params.get('id');
        if (!eventId) {
          throw new Error('Event ID not found in URL');
        }
        return this.eventDetailsService.getEventById(eventId);
      })
    );
  }

  // gtAllEvents(): Observable<EventDto[]> {
  //   return (this.events$ = this.eventApiService.getEvent());
  // }
}
