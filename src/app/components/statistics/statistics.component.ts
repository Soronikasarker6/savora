import { Component, OnInit, ElementRef, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsComponent implements OnInit {
  animated = signal(false);
  counters = signal<number[]>([0, 0, 0, 0]);

  readonly stats: Stat[] = [
    { value: 50000, suffix: '+', label: 'Happy Guests', description: 'Served across all our locations' },
    { value: 120, suffix: '+', label: 'Signature Dishes', description: 'Across six world cuisines' },
    { value: 15, suffix: '+', label: 'Master Chefs', description: 'Trained in their culinary traditions' },
    { value: 6, suffix: '', label: 'Cuisines', description: 'One kitchen, infinite stories' },
  ];

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.animated()) {
          this.animated.set(true);
          this.animateCounters();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(this.el.nativeElement);
  }

  private animateCounters(): void {
    this.stats.forEach((stat, i) => {
      const duration = 2000;
      const start = performance.now();

      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * stat.value);

        this.counters.update((c) => {
          const next = [...c];
          next[i] = current;
          return next;
        });

        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }
}
