import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventDto } from '../model';

@Injectable({
  providedIn: 'root'
})
export class EventApiService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getEvent(): Observable<EventDto[]>{
    return this.http.get<EventDto[]>(`${this.url}/events`);
  }
}
