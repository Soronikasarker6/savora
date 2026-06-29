import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsletterComponent {
  email = '';
  isSubmitted = signal(false);
  isLoading = signal(false);

  onSubmit(): void {
    if (!this.email || !this.email.includes('@')) return;
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
      this.isSubmitted.set(true);
    }, 1000);
  }
}
