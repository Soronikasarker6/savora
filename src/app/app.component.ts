import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { FloatingOrderBtnComponent } from './components/floating-order-btn/floating-order-btn.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    LoadingScreenComponent,
    ScrollToTopComponent,
    FloatingOrderBtnComponent,
  ],
  template: `
    <app-loading-screen *ngIf="isLoading" (loaded)="onLoaded()"></app-loading-screen>
    <div class="app-wrapper" [class.visible]="!isLoading">
      <app-navbar></app-navbar>
      <main>
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
      <app-scroll-to-top></app-scroll-to-top>
      <app-floating-order-btn></app-floating-order-btn>
    </div>
  `,
  styles: [`
    .app-wrapper {
      opacity: 0;
      transition: opacity 0.6s ease;
      &.visible { opacity: 1; }
    }
    main { min-height: 100vh; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  isLoading = true;

  ngOnInit(): void {
    // Simulate loading assets
    setTimeout(() => {
      this.isLoading = false;
    }, 2200);
  }

  onLoaded(): void {
    this.isLoading = false;
  }
}
