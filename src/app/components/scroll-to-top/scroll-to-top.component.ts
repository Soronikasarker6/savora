import { Component, HostListener, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="scroll-top-btn"
            [class.visible]="isVisible()"
            (click)="scrollToTop()"
            aria-label="Scroll to top">
      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  `,
  styles: [`
    .scroll-top-btn {
      position: fixed;
      bottom: 100px;
      right: 24px;
      z-index: 500;
      width: 44px;
      height: 44px;
      background: var(--color-accent);
      color: var(--color-primary);
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0;
      transform: translateY(16px);
      transition: opacity 0.3s ease, transform 0.3s ease, background 0.2s;
      pointer-events: none;
      box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4);

      &.visible {
        opacity: 1;
        transform: translateY(0);
        pointer-events: all;
      }

      &:hover {
        background: var(--color-accent-hover);
        transform: translateY(-2px);
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollToTopComponent {
  isVisible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isVisible.set(window.scrollY > 400);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
