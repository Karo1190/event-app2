import { Component, Input, OnInit } from '@angular/core';
import { EventDto, MonthGroup } from '../../model';
import { DatePipe } from '@angular/common';
import { debounceTime, Observable } from 'rxjs';
import { EventDetailsService } from '../services/event-details.service';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FormBuilder, FormGroup, UntypedFormGroup } from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'app-event-details-table',
  templateUrl: './event-details-table.component.html',
  styleUrls: ['./event-details-table.component.scss'],
})
export class EventDetailsTableComponent implements OnInit {
  @Input() event$!: Observable<EventDto>;
  eventsGroupedByMonth$!: Observable<MonthGroup[]>;
  form!: FormGroup;

  constructor(
    private datePipe: DatePipe,
    private eventDetailsService: EventDetailsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();

    this.eventsGroupedByMonth$ =
      this.eventDetailsService.filterAndGroupLocations({});
    this.setCriteria();
  }

  createForm(): FormGroup {
    return (this.form = this.fb.group({
      locations: [''],
      dateFrom: [null],
      dateTo: [null],
    }));
  }

  setCriteria() {
    this.form.valueChanges.pipe(
      debounceTime(300))
      .subscribe((values) => {
      return (this.eventsGroupedByMonth$ =
        this.eventDetailsService.filterAndGroupLocations(values));
    });
  }

  formatDate(date: Date | null): string {
    return date ? this.datePipe.transform(date, 'EEEE') || '' : '';
  }
}
//dodac sekcje z proponowanymi wydarzeniami-specjalny endpoint do tego gzdie ai wyszukuje najodpowiedniejsze wydarzenia na podsatwie okreslonych kryteriow wczesniejszych wyszukiwan itd
//dodac sekcje z opisem wydarzenia
