import { Subjects } from '../constants/subjects';

export interface BookingCreatedEvent {
  subject: Subjects.BookingCreated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
