import { Component, Input } from '@angular/core';
import { EventDto } from '../model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent {
  value!: number;

  @Input() events: EventDto[] = [];
}
