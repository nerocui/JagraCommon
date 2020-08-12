import { Subjects } from '../constants/subjects';

export interface BookingUpdatedEvent {
  subject: Subjects.BookingUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
