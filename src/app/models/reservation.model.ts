export interface Reservation {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion?: string;
  specialRequests?: string;
}

export interface ReservationTime {
  value: string;
  label: string;
  available: boolean;
}
