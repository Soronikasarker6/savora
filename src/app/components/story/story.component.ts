import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryComponent {
  readonly pillars = [
    { icon: '✦', title: 'Sourced Deliberately', text: 'Every ingredient traced to its origin — seasonal, ethical, exceptional.' },
    { icon: '✦', title: 'Crafted with Mastery', text: 'Chefs trained in the traditions they cook — no shortcuts, no compromises.' },
    { icon: '✦', title: 'Served with Heart', text: 'Hospitality is our language — every guest is a welcomed story.' },
  ];
}
