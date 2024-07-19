import { Injectable } from '@angular/core';
import { EventDto, EventLocation, FilterCriteria, MonthGroup } from '../../model';
import { Observable, from, BehaviorSubject, combineLatest } from 'rxjs';
import { groupBy, mergeMap, toArray, map, switchMap } from 'rxjs/operators';
import { EventApiService } from '../../services/event-api.service';

@Injectable({
  providedIn: 'root',
})
export class EventDetailsService {
  event$!: Observable<EventDto>;
   searchCriteria$ = new BehaviorSubject<FilterCriteria>({});

  constructor(
    private eventApiService: EventApiService
  ) {}

  getEventById(id: string): Observable<EventDto> {
    return (this.event$ = this.eventApiService.getEventById(id));
  }

  filterAndGroupLocations(searchCriteria: FilterCriteria): Observable<MonthGroup[]> {
    return combineLatest([this.event$, this.searchCriteria$]).pipe(
      switchMap(([event]) => {
        const filteredLocations = this.filterLocations(event.locations, searchCriteria);
        return this.groupLocationsByMonth(filteredLocations);
      })
    );
  }

  private filterLocations(locations: EventLocation[], searchCriteria: FilterCriteria): EventLocation[] {
    return locations.filter(location => {
      return Object.entries(searchCriteria).every(([key, value]) => {
        if (value === null || value === '') return true;
        switch (key) {
          case 'locations':
            return location.location.toLowerCase().includes(value.toLowerCase());
          case 'dateFrom':
            return value <= new Date(location.date);
          case 'dateTo':
            return value >= new Date(location.date);
          default:
            return true;
        }
      });
    });
  }

  private groupLocationsByMonth(locations: EventLocation[]): Observable<MonthGroup[]> {
    return from(locations).pipe(
      groupBy(location => {
        const date = new Date(location.date);
        return `${date.getFullYear()}-${date.getMonth() + 1}`;
      }),
      mergeMap(group =>
        group.pipe(
          toArray(),
          map(locations => ({
            month: group.key,
            locations
          }))
        )
      ),
      toArray()
    );
  }
}