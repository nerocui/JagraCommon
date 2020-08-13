import { Subjects } from '../constants/subjects';

export interface BookingUpdatedEvent {
  subject: Subjects.BookingUpdated;
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
