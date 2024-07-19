import { FormControl, FormGroup } from "@angular/forms";

export interface Option {
    label: string;
    value: string;
  }

export interface Column {
    field: string;
    header: string;
}


  export enum EventCategory {
    MUSIC = 'Music',
    SPORTS = 'Sports',
    ARTS = 'Arts',
    FOOD = 'Food',
    BUSINESS = 'Business',
    EDUCATION = 'Education',
    FAMILY = 'Family',
    OTHER = 'Other',
  }

  export interface EventDto {
    // [x: string]: string | number | Date;
    id: number,
    name: string,
    shortDescription?: string,
    description: string,
    image: string,
    price: number,
    category: EventCategory,
    rating: number,
    locations: EventLocation[]
  }

  export interface EventLocation {
    location: string;
    date: string
  }

  export interface MonthGroup {
    month: string;
    locations: EventLocation[];
  }

  export interface FilterConfig {
    key: string; 
    type: string; 
  }
  
  export interface FilterCriteria {
    [key: string]: any;
  }

  export interface Control {
    name: string;
    type: string;
    label: string;
    required: boolean;
    visible: boolean | (() => boolean);
    defaultValue: any;
  }
  
  export interface Step {
    header: string;
    controls: Control[];
  }