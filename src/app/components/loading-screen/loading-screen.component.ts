import { Component, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        animate('0.8s ease', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class LoadingScreenComponent implements OnInit {
  @Output() loaded = new EventEmitter<void>();
  progress = 0;

  ngOnInit(): void {
    const interval = setInterval(() => {
      this.progress += Math.random() * 15;
      if (this.progress >= 100) {
        this.progress = 100;
        clearInterval(interval);
        setTimeout(() => this.loaded.emit(), 400);
      }
    }, 120);
  }
}
