import { Component, OnInit, OnDestroy, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialService } from '../../services/testimonial.service';
import { Testimonial } from '../../models/testimonial.model';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials = signal<Testimonial[]>([]);
  activeIndex = signal(0);
  private autoplayInterval?: ReturnType<typeof setInterval>;

  constructor(private testimonialService: TestimonialService) {}

  ngOnInit(): void {
    this.testimonialService.getTestimonials().subscribe((items) => {
      this.testimonials.set(items);
      this.startAutoplay();
    });
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  goTo(index: number): void {
    this.activeIndex.set(index);
    this.stopAutoplay();
    this.startAutoplay();
  }

  prev(): void {
    const len = this.testimonials().length;
    this.goTo((this.activeIndex() - 1 + len) % len);
  }

  next(): void {
    this.goTo((this.activeIndex() + 1) % this.testimonials().length);
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }

  private startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.activeIndex.update((i) => (i + 1) % this.testimonials().length);
    }, 5000);
  }

  private stopAutoplay(): void {
    if (this.autoplayInterval) clearInterval(this.autoplayInterval);
  }
}
