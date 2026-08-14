import {
  Component, OnInit, OnDestroy, HostListener,
  signal, ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = signal(false);
  isMenuOpen = signal(false);
  isCartOpen = signal(false);

  readonly navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/menu', label: 'Menu', exact: false },
    { path: '/about', label: 'About', exact: false },
    { path: '/gallery', label: 'Gallery', exact: false },
    { path: '/special-offers', label: 'Offers', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
  ];

  constructor(public cartService: CartService) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((v) => !v);
    document.body.style.overflow = this.isMenuOpen() ? 'hidden' : '';
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
    document.body.style.overflow = '';
  }

  toggleCart(): void {
    this.isCartOpen.update((v) => !v);
  }

  cartWhatsAppLink(): string {
    const lines = this.cartService.items().map(
      (item) => `- ${item.quantity}x ${item.menuItem.name} (৳${item.menuItem.price} each)`
    );
    const message = [
      "Hello SAVORA! I'd like to place an order:",
      ...lines,
      `Total: ৳${this.cartService.total()}`,
      'https://soronikasarker6.github.io/savora/',
    ].join('\n');
    return `https://wa.me/8801766140895?text=${encodeURIComponent(message)}`;
  }
}
