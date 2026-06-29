import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturedCategoriesComponent } from '../../components/featured-categories/featured-categories.component';
import { SpecialDishesComponent } from '../../components/special-dishes/special-dishes.component';
import { StoryComponent } from '../../components/story/story.component';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { ReservationFormComponent } from '../../components/reservation-form/reservation-form.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { ChefRecommendationComponent } from '../../components/chef-recommendation/chef-recommendation.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    FeaturedCategoriesComponent,
    SpecialDishesComponent,
    StoryComponent,
    StatisticsComponent,
    GalleryComponent,
    ReservationFormComponent,
    TestimonialsComponent,
    ChefRecommendationComponent,
    FaqComponent,
    NewsletterComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-featured-categories></app-featured-categories>
    <app-special-dishes></app-special-dishes>
    <app-story></app-story>
    <app-statistics></app-statistics>
    <app-chef-recommendation></app-chef-recommendation>
    <app-gallery></app-gallery>
    <app-reservation-form></app-reservation-form>
    <app-testimonials></app-testimonials>
    <app-faq></app-faq>
    <app-newsletter></app-newsletter>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
