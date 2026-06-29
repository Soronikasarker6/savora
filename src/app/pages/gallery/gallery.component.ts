import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent as GalleryWidgetComponent } from '../../components/gallery/gallery.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule, GalleryWidgetComponent, NewsletterComponent],
  template: `
    <div class="page-hero">
      <div class="container page-hero-content">
        <p class="page-hero-label">Visual Stories</p>
        <h1 class="page-hero-title">The SAVORA World</h1>
        <p class="page-hero-subtitle">A glimpse into our kitchen, our dining room, and the dishes that define us.</p>
      </div>
    </div>
    <app-gallery></app-gallery>
    <app-newsletter></app-newsletter>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {}
