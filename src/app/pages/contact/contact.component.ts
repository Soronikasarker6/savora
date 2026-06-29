import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  readonly hours = [
    { day: 'Monday – Friday', time: '11:00 AM – 11:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 11:30 PM' },
    { day: 'Sunday', time: '10:00 AM – 10:30 PM' },
    { day: 'Public Holidays', time: '11:00 AM – 10:00 PM' },
  ];

  readonly socials = [
    { name: 'Facebook', url: '#', handle: '@savora.restaurant' },
    { name: 'Instagram', url: '#', handle: '@savora_dhaka' },
    { name: 'TikTok', url: '#', handle: '@savoraofficial' },
    { name: 'YouTube', url: '#', handle: 'SAVORA Restaurant' },
  ];
}
