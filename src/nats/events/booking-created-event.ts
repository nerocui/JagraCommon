import { Subjects } from '../constants/subjects';

export interface BookingCreatedEvent {
  subject: Subjects.BookingCreated;
  data: {
    bookingId: string;
    userId: string;
    startTime: Date;
    endTime: Date;
    isExtensionTo: string;
    status: string;
    paymentStatus: string;
    note: string;
  };
}
