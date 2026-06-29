import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-floating-order-btn',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="floating-wrap" [class.expanded]="isOpen()">
      <button class="fab" (click)="toggle()" aria-label="Quick actions">
        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14"/>
        </svg>
      </button>
      <div class="fab-menu">
        <a routerLink="/reservations" class="fab-item" title="Reserve Table" (click)="toggle()">
          <span class="fab-label">Reserve</span>
          <span class="fab-icon">🍽️</span>
        </a>
        <a href="https://wa.me/8801700000000" target="_blank" class="fab-item" title="WhatsApp" (click)="toggle()">
          <span class="fab-label">WhatsApp</span>
          <span class="fab-icon">💬</span>
        </a>
        <a routerLink="/menu" class="fab-item" title="Order Now" (click)="toggle()">
          <span class="fab-label">Order</span>
          <span class="fab-icon">🛒</span>
        </a>
      </div>
    </div>
  `,
  styles: [`
    .floating-wrap {
      position: fixed;
      bottom: 32px;
      right: 24px;
      z-index: 500;
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-end;
      gap: 10px;
    }

    .fab {
      width: 52px;
      height: 52px;
      background: var(--color-secondary);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-text);
      cursor: pointer;
      box-shadow: var(--shadow-md);
      transition: transform var(--transition), background var(--transition);

      .floating-wrap.expanded & {
        background: var(--color-accent);
        color: var(--color-primary);
        transform: rotate(45deg);
      }
    }

    .fab-menu {
      display: flex;
      flex-direction: column;
      gap: 8px;
      opacity: 0;
      transform: translateY(16px);
      pointer-events: none;
      transition: opacity 0.3s ease, transform 0.3s ease;

      .floating-wrap.expanded & {
        opacity: 1;
        transform: translateY(0);
        pointer-events: all;
      }
    }

    .fab-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 16px;
      background: var(--color-bg-2);
      border: 1px solid var(--color-border);
      border-radius: 99px;
      text-decoration: none;
      color: var(--color-text);
      font-size: 13px;
      font-weight: 500;
      backdrop-filter: blur(12px);
      white-space: nowrap;
      transition: var(--transition);
      box-shadow: var(--shadow-sm);

      &:hover {
        border-color: var(--color-accent);
        color: var(--color-accent);
        transform: translateX(-4px);
      }
    }

    .fab-icon { font-size: 16px; }
    .fab-label { font-size: 12px; font-weight: 600; letter-spacing: 0.5px; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingOrderBtnComponent {
  isOpen = signal(false);
  constructor(public cartService: CartService) {}
  toggle(): void { this.isOpen.update((v) => !v); }
}
