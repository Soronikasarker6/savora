import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, StatisticsComponent, NewsletterComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly chefs = [
    { name: 'Chef Arif Hossain', role: 'Executive Chef', specialty: 'Bangladeshi & Modern Asian', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80', experience: '20 years' },
    { name: 'Chef Li Wei', role: 'Head Chef — Chinese', specialty: 'Cantonese & Sichuan', image: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80', experience: '15 years' },
    { name: 'Chef Niran Sombat', role: 'Head Chef — Thai', specialty: 'Thai Regional Cuisines', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80', experience: '18 years' },
    { name: 'Chef Marco Ricci', role: 'Head Chef — Italian', specialty: 'Neapolitan Pizza & Pasta', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80', experience: '12 years' },
  ];

  readonly timeline = [
    { year: '2019', event: 'SAVORA opens its first location in Gulshan, Dhaka — with a vision to bring authentic world cuisines under one roof.' },
    { year: '2020', event: 'Awarded "Best New Restaurant" by Dhaka Food Critics Circle. Expanded Thai and Chinese menus with specialist chefs.' },
    { year: '2021', event: 'Launched private dining and corporate event services. Crossed 10,000 guests served.' },
    { year: '2022', event: 'Introduced the SAVORA Chef\'s Table — an intimate 8-seat tasting menu experience.' },
    { year: '2023', event: 'Named one of Bangladesh\'s Top 10 Restaurants by The Daily Star. Expanded delivery network.' },
    { year: '2024', event: 'Opened SAVORA Lounge — a dedicated cocktail and small plates concept within the restaurant.' },
    { year: '2025', event: 'Celebrated serving 50,000+ guests. Launched SAVORA loyalty program and digital ordering platform.' },
  ];
}
