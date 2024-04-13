export interface Option {
    label: string;
    value: string;
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
    id: number,
    name: string,
    description: string,
    image: string,
    price: number,
    category: EventCategory,
    rating: number
  }