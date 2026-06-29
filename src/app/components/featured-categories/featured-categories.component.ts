import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Category {
  label: string;
  emoji: string;
  description: string;
  count: number;
  slug: string;
  color: string;
}

@Component({
  selector: 'app-featured-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './featured-categories.component.html',
  styleUrls: ['./featured-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedCategoriesComponent {
  readonly categories: Category[] = [
    { label: 'Fast Food', emoji: '🍔', description: 'Smash burgers, loaded fries & more', count: 12, slug: 'fast-food', color: '#E8642A' },
    { label: 'Pizza', emoji: '🍕', description: 'Wood-fired, slow-proofed perfection', count: 8, slug: 'pizza', color: '#D4AF37' },
    { label: 'Fried Chicken', emoji: '🍗', description: '24-hour brined, 12-spice crispy', count: 10, slug: 'fried-chicken', color: '#E5C76B' },
    { label: 'Bangladeshi', emoji: '🍛', description: 'Heritage recipes, modern craft', count: 16, slug: 'bangladeshi', color: '#2E8B57' },
    { label: 'Chinese', emoji: '🥢', description: 'Wok mastery and dim sum artistry', count: 14, slug: 'chinese', color: '#CC3333' },
    { label: 'Thai', emoji: '🌿', description: 'Aromatic curries and street classics', count: 10, slug: 'thai', color: '#0F3D3E' },
  ];
}
