import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Reservation, ReservationTime } from '../models/reservation.model';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  readonly availableTimes: ReservationTime[] = [
    { value: '11:00', label: '11:00 AM', available: true },
    { value: '11:30', label: '11:30 AM', available: true },
    { value: '12:00', label: '12:00 PM', available: true },
    { value: '12:30', label: '12:30 PM', available: false },
    { value: '13:00', label: '1:00 PM', available: true },
    { value: '13:30', label: '1:30 PM', available: true },
    { value: '14:00', label: '2:00 PM', available: true },
    { value: '18:00', label: '6:00 PM', available: true },
    { value: '18:30', label: '6:30 PM', available: true },
    { value: '19:00', label: '7:00 PM', available: true },
    { value: '19:30', label: '7:30 PM', available: false },
    { value: '20:00', label: '8:00 PM', available: true },
    { value: '20:30', label: '8:30 PM', available: true },
    { value: '21:00', label: '9:00 PM', available: true },
    { value: '21:30', label: '9:30 PM', available: true },
  ];

  submitReservation(reservation: Reservation): Observable<{ success: boolean; confirmationId: string }> {
    const confirmationId = 'SAV-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    return of({ success: true, confirmationId }).pipe(delay(1500));
  }

  getMinDate(): string {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  }

  getMaxDate(): string {
    const future = new Date();
    future.setMonth(future.getMonth() + 3);
    return future.toISOString().split('T')[0];
  }
}
