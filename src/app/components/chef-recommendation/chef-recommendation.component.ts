import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chef-recommendation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="section chef-section">
      <div class="chef-bg">
        <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1920&q=70" alt="" role="presentation" loading="lazy" />
        <div class="chef-overlay"></div>
      </div>
      <div class="container chef-content">
        <div class="chef-text">
          <span class="section-label">From the Kitchen</span>
          <h2 class="section-title" style="text-align:left; max-width: 520px">
            "Food is a memory. Every dish I cook is a story I want you to remember."
          </h2>
          <span class="gold-line" style="margin: 24px 0"></span>
          <p class="chef-quote-attr">— Chef Arif Hossain, Executive Chef, SAVORA</p>
          <p class="chef-bio">
            With 20 years across Dhaka, Bangkok, and London's Michelin-starred kitchens,
            Chef Arif leads a brigade of 15 specialists — each a native of their cuisine.
            His philosophy is simple: source with integrity, cook with soul, serve with pride.
          </p>
          <a routerLink="/about" class="btn btn-primary" style="margin-top: 32px">Meet Our Chefs</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .chef-section {
      position: relative;
      overflow: hidden;
      min-height: 560px;
      display: flex;
      align-items: center;
    }
    .chef-bg {
      position: absolute;
      inset: 0;
      img { width:100%; height:100%; object-fit:cover; filter:brightness(0.25); }
    }
    .chef-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, rgba(11,11,11,0.9) 0%, rgba(11,11,11,0.4) 60%, transparent 100%);
    }
    .chef-content { position: relative; z-index: 1; }
    .chef-text {
      max-width: 560px;
      .section-label { justify-content: flex-start; &::before { display: none; } }
    }
    .section-title { font-style: italic; font-size: clamp(22px, 3vw, 34px) !important; }
    .chef-quote-attr {
      font-size: 13px;
      font-weight: 600;
      color: var(--color-accent);
      letter-spacing: 1px;
      margin-bottom: 20px;
    }
    .chef-bio {
      font-size: 15px;
      color: var(--color-text-muted);
      line-height: 1.85;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChefRecommendationComponent {}
