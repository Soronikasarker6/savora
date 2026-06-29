import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { CartService } from '../../services/cart.service';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-special-dishes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './special-dishes.component.html',
  styleUrls: ['./special-dishes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialDishesComponent implements OnInit {
  featured = signal<MenuItem[]>([]);
  favorites = signal<Set<number>>(new Set());

  constructor(
    private menuService: MenuService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.menuService.getFeaturedItems().subscribe((items) => {
      this.featured.set(items.slice(0, 6));
    });
  }

  toggleFavorite(id: number): void {
    this.favorites.update((favs) => {
      const next = new Set(favs);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  addToCart(item: MenuItem): void {
    this.cartService.addItem(item);
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? 1 : 0);
  }
}
