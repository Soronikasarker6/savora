import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  openIndex = signal<number | null>(null);

  readonly faqs: FAQ[] = [
    { question: 'Do you accept walk-in guests?', answer: 'Yes, we welcome walk-in guests subject to table availability. However, we strongly recommend making a reservation — especially on weekends and public holidays — to guarantee your preferred time and seating arrangement.' },
    { question: 'Can you accommodate dietary restrictions?', answer: 'Absolutely. Our kitchen can accommodate vegetarian, vegan, gluten-free, halal, and most allergy-specific requirements. Please mention your needs when making your reservation or notify your server on arrival.' },
    { question: 'Is there a private dining option?', answer: 'Yes. Our Private Dining Room seats up to 20 guests and is ideal for business dinners, celebrations, and exclusive events. Please contact us to enquire about availability and bespoke menu options.' },
    { question: 'What is your cancellation policy?', answer: 'We ask that you notify us at least 4 hours before your reservation time if you need to cancel. For large groups (8+ guests), we request 24 hours\' notice. You can cancel via phone, WhatsApp, or email.' },
    { question: 'Do you offer delivery or takeaway?', answer: 'Yes, we offer both delivery and takeaway for our full menu. You can order through our website, by phone, or via major delivery platforms. Delivery is available within a 5km radius.' },
    { question: 'Is there parking available?', answer: 'We have dedicated valet parking available seven days a week from 11:00 AM to midnight. Additional street parking is available in the surrounding area.' },
    { question: 'Do you host corporate or private events?', answer: 'Yes. We offer complete event packages including bespoke menus, dedicated event coordinators, AV equipment, and floral arrangement services. Contact our events team for a custom proposal.' },
  ];

  toggle(index: number): void {
    this.openIndex.update((i) => (i === index ? null : index));
  }
}
