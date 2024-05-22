import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EventDto } from '../model';
import { EventApiService } from './event-api.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  constructor(private eventApiService: EventApiService) { }

  getEventsGroupedByCategory(): Observable<{ [key: string]: EventDto[] }> {
    return this.eventApiService.getEvent().pipe(
      map(events => this.groupEventsByCategory(events))
    );
  }


  private groupEventsByCategory(events: EventDto[]): { [key: string]: EventDto[] } {
    return events.reduce((acc, event) => {
      const category = event.category.toUpperCase();
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(event);
      return acc;
    }, {} as { [key: string]: EventDto[] });
  }

}
