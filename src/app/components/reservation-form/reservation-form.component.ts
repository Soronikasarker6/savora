import { Component, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationFormComponent implements OnInit {
  form!: FormGroup;
  isSubmitting = signal(false);
  isSuccess = signal(false);
  confirmationId = signal('');
  errorMessage = signal('');

  readonly guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  readonly occasions = ['', 'Birthday', 'Anniversary', 'Business Dinner', 'Date Night', 'Family Gathering', 'Celebration', 'Other'];

  constructor(
    private fb: FormBuilder,
    public reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{7,15}$/)]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      guests: [2, [Validators.required, Validators.min(1), Validators.max(10)]],
      occasion: [''],
      specialRequests: [''],
    });
  }

  get f() { return this.form.controls; }

  hasError(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set('');

    this.reservationService.submitReservation(this.form.value).subscribe({
      next: (res) => {
        this.isSubmitting.set(false);
        this.isSuccess.set(true);
        this.confirmationId.set(res.confirmationId);
      },
      error: () => {
        this.isSubmitting.set(false);
        this.errorMessage.set('Something went wrong. Please try again or call us directly.');
      },
    });
  }

  resetForm(): void {
    this.isSuccess.set(false);
    this.form.reset({ guests: 2 });
  }
}
