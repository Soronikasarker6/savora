import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="not-found">
      <div class="not-found-bg">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=50" alt="" role="presentation" />
        <div class="nf-overlay"></div>
      </div>
      <div class="container not-found-content">
        <div class="nf-mark">
          <svg width="64" height="80" viewBox="-82 -170 234 348" xmlns="http://www.w3.org/2000/svg">
            <path d="M 18-170 C 74-170 118-144 118-100 C 118-68 98-46 64-30 L 20-10 C-34 12-82 40-82 90 C-82 144-32 178 30 178 C 80 178 118 158 134 128 C 142 112 144 94 144 78 L 108 78 C 108 96 96 122 36 144 C 0 156-26 148-44 134 C-58 122-46 108-18 100 C-4 96 12 90 24 84 L 64 66 C 114 44 152 12 152-38 C 152-104 100-152 28-166 C 24-168 20-170 18-170 Z" fill="#D4AF37"/>
            <path d="M 128-116 C 132-130 134-148 128-164 C 124-174 116-182 108-180 C 100-178 98-168 102-156 C 106-144 108-132 106-120 C 116-120 122-118 128-116 Z" fill="transparent"/>
          </svg>
        </div>
        <div class="nf-code">404</div>
        <h1 class="nf-title">This Page Got Lost in the Kitchen</h1>
        <p class="nf-subtitle">The page you're looking for doesn't exist — but a great meal is just one click away.</p>
        <div class="nf-actions">
          <a routerLink="/" class="btn btn-primary btn-lg">Back to Home</a>
          <a routerLink="/menu" class="btn btn-outline btn-lg">Browse Menu</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .not-found {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .not-found-bg {
      position: absolute;
      inset: 0;
      img { width:100%; height:100%; object-fit:cover; filter:brightness(0.15); }
    }
    .nf-overlay {
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at center, rgba(15,61,62,0.4) 0%, rgba(11,11,11,0.9) 70%);
    }
    .not-found-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 40px 0;
    }
    .nf-mark { animation: float 3s ease-in-out infinite; }
    .nf-code {
      font-family: var(--font-heading);
      font-size: clamp(80px, 15vw, 160px);
      font-weight: 500;
      color: var(--color-accent);
      opacity: 0.3;
      line-height: 0.85;
      letter-spacing: 0.1em;
    }
    .nf-title {
      font-family: var(--font-heading);
      font-size: clamp(22px, 4vw, 40px);
      font-weight: 500;
      color: var(--color-text);
      letter-spacing: 0.03em;
    }
    .nf-subtitle {
      font-size: 16px;
      color: var(--color-text-muted);
      max-width: 440px;
      line-height: 1.7;
    }
    .nf-actions {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 12px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
