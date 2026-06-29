import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/menu', label: 'Menu' },
    { path: '/reservations', label: 'Reservations' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/special-offers', label: 'Special Offers' },
    { path: '/contact', label: 'Contact' },
  ];

  readonly legalLinks = [
    { path: '/privacy-policy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms & Conditions' },
  ];

  readonly cuisines = ['Fast Food', 'Pizza', 'Fried Chicken', 'Bangladeshi', 'Chinese', 'Thai'];

  readonly socials = [
    { label: 'Facebook', url: '#', icon: 'f' },
    { label: 'Instagram', url: '#', icon: 'in' },
    { label: 'TikTok', url: '#', icon: 'tk' },
    { label: 'YouTube', url: '#', icon: 'yt' },
  ];
}
