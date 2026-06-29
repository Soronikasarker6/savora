import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-hero">
      <div class="container page-hero-content">
        <p class="page-hero-label">Legal</p>
        <h1 class="page-hero-title">Terms & Conditions</h1>
        <p class="page-hero-subtitle">Last updated: June 2025</p>
      </div>
    </div>
    <section class="section legal-section">
      <div class="container legal-container">
        <div class="legal-content glass-card">
          @for (section of sections; track section.title) {
            <div class="legal-section-block">
              <h2>{{ section.title }}</h2>
              <p>{{ section.content }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .legal-section { background: var(--color-bg); }
    .legal-container { max-width: 860px; }
    .legal-content { padding: 48px; }
    .legal-section-block {
      margin-bottom: 36px; padding-bottom: 36px;
      border-bottom: 1px solid var(--color-border);
      &:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
      h2 { font-family: var(--font-heading); font-size: 18px; font-weight: 500; color: var(--color-text); margin-bottom: 12px; }
      p { font-size: 14px; color: var(--color-text-muted); line-height: 1.85; }
    }
    @media (max-width: 768px) { .legal-content { padding: 28px 20px; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsComponent {
  readonly sections = [
    { title: '1. Acceptance of Terms', content: 'By accessing and using the SAVORA website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.' },
    { title: '2. Reservations', content: 'Reservations are subject to availability. We will make every effort to accommodate your preferred date, time, and party size. Reservations are confirmed via email. We ask for at least 4 hours notice to cancel or modify a reservation.' },
    { title: '3. Cancellation Policy', content: 'For standard reservations: 4 hours notice required. For large groups (8+ guests): 24 hours notice required. For private dining events: 48 hours notice required. Late cancellations may result in a cancellation fee at our discretion.' },
    { title: '4. Food & Allergen Disclosure', content: 'While we take every precaution, our kitchen handles a wide range of ingredients. We cannot guarantee that any dish is entirely free from allergens. Guests with severe allergies should inform staff on arrival. SAVORA cannot be held liable for allergic reactions where guests have not disclosed allergies.' },
    { title: '5. Pricing', content: 'All prices are in Bangladesh Taka (BDT) and are inclusive of applicable taxes unless stated otherwise. Prices are subject to change without notice. Promotional prices are valid only for the stated period and terms.' },
    { title: '6. Online Orders & Delivery', content: 'Online orders are accepted subject to availability. Delivery times are estimates only. SAVORA is not liable for delays caused by traffic, weather, or other unforeseen circumstances. All sales are final; refunds are considered on a case-by-case basis.' },
    { title: '7. Intellectual Property', content: 'All content on this website, including the SAVORA brand mark, wordmark, photography, and written content, is the intellectual property of SAVORA Restaurant. Unauthorized reproduction is prohibited.' },
    { title: '8. Governing Law', content: 'These Terms and Conditions are governed by the laws of Bangladesh. Any disputes will be subject to the exclusive jurisdiction of the courts of Dhaka, Bangladesh.' },
  ];
}
