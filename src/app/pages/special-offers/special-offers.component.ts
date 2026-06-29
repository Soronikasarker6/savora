import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';

@Component({
  selector: 'app-special-offers',
  standalone: true,
  imports: [CommonModule, RouterLink, NewsletterComponent],
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialOffersComponent {
  readonly offers = [
    { title: 'Weekend Brunch Special', discount: '20% OFF', description: 'Every Saturday and Sunday, 10 AM – 2 PM. Enjoy 20% off our entire brunch menu including the full Bangladeshi breakfast spread.', validUntil: 'Ongoing', code: 'BRUNCH20', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80', tag: 'Weekend' },
    { title: 'Family Feast Package', discount: '4 for 3', description: 'Order any 4 main courses and pay for only 3. Perfect for family gatherings of 4 or more guests. Available all week.', validUntil: 'Ongoing', code: 'FAMILY4', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', tag: 'Family' },
    { title: 'Date Night Duo', discount: '৳500 OFF', description: 'Reserve a table for 2, enjoy a 3-course set menu for two with a complimentary dessert. Every Tuesday and Wednesday evening.', validUntil: 'Ongoing', code: 'DATE500', image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80', tag: 'Couple' },
    { title: 'Corporate Lunch', discount: '15% OFF', description: 'Business lunch packages for groups of 6 or more. Includes a dedicated server, private section, and priority seating. Mon–Fri, 12–3 PM.', validUntil: 'Ongoing', code: 'CORP15', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80', tag: 'Corporate' },
    { title: 'Happy Hour Bites', discount: 'Buy 2 Get 1', description: 'From 4 PM to 6 PM daily, order any two starters and receive a third of equal or lesser value free. Best enjoyed at the lounge bar.', validUntil: 'Ongoing', code: 'HAPPY3', image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=600&q=80', tag: 'Daily' },
    { title: 'Birthday Celebration', discount: 'Free Dessert', description: 'Dine with us on your birthday and enjoy a complimentary signature dessert platter — for the table. Valid on your birthday date.', validUntil: 'Year-round', code: 'BIRTHDAY', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80', tag: 'Special' },
  ];
}
