import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../../components/reservation-form/reservation-form.component';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule, ReservationFormComponent],
  template: `
    <div class="page-hero">
      <div class="container page-hero-content">
        <p class="page-hero-label">Book a Table</p>
        <h1 class="page-hero-title">Reserve Your Experience</h1>
        <p class="page-hero-subtitle">Secure your table at SAVORA and let us craft an evening to remember.</p>
      </div>
    </div>
    <app-reservation-form></app-reservation-form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationsComponent {}
