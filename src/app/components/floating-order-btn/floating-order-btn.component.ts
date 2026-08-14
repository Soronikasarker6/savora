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
        <a href="https://wa.me/8801766140895?text=Hello%20SAVORA!%20I'd%20like%20to%20know%20more%20about%20your%20menu%20and%20make%20a%20reservation.%20https%3A%2F%2Fsoronikasarker6.github.io%2Fsavora%2F" target="_blank" class="fab-item" title="WhatsApp" (click)="toggle()">
          <span class="fab-label">WhatsApp</span>
          <svg class="fab-icon fab-icon--whatsapp" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.86.508 3.6 1.393 5.09L2.05 22l5.036-1.32A9.947 9.947 0 0 0 12.001 22c5.523 0 10-4.477 10-10s-4.477-10-10-10Zm0 18.16a8.13 8.13 0 0 1-4.146-1.135l-.297-.176-3.005.788.803-2.933-.194-.301A8.13 8.13 0 0 1 3.84 12c0-4.502 3.658-8.16 8.161-8.16 4.502 0 8.16 3.658 8.16 8.16 0 4.502-3.658 8.16-8.16 8.16Z"/>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.83 12.83 0 0 0-.571-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z"/>
          </svg>
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
      /* The collapsed .fab-menu still reserves its layout height (it's only
         hidden via opacity/transform), so this wrapper's own box silently
         overlaps whatever sits above the FAB — e.g. the scroll-to-top
         button — and swallows its clicks. Opt this wrapper out of hit
         testing and opt the real controls back in individually. */
      pointer-events: none;
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
      pointer-events: auto;
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
    .fab-icon--whatsapp {
      color: #25D366;
      transition: color var(--transition);

      .fab-item:hover & { color: var(--color-accent); }
    }
    .fab-label { font-size: 12px; font-weight: 600; letter-spacing: 0.5px; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingOrderBtnComponent {
  isOpen = signal(false);
  constructor(public cartService: CartService) {}
  toggle(): void { this.isOpen.update((v) => !v); }
}
