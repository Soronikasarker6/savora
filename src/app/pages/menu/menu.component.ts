import { Component, OnInit, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../../services/menu.service';
import { CartService } from '../../services/cart.service';
import { MenuItem, MenuCategory } from '../../models/menu-item.model';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, NewsletterComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  allItems = signal<MenuItem[]>([]);
  activeCategory = signal<MenuCategory>('all');
  searchQuery = signal('');
  favorites = signal<Set<number>>(new Set());
  quickViewItem = signal<MenuItem | null>(null);

  filteredItems = computed(() => {
    const q = this.searchQuery().toLowerCase();
    return this.allItems().filter((item) => {
      const catMatch = this.activeCategory() === 'all' || item.category === this.activeCategory();
      const searchMatch = !q || item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
      return catMatch && searchMatch;
    });
  });

  constructor(
    private menuService: MenuService,
    public cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe((items) => {
      this.allItems.set(items);
    });

    this.route.queryParams.subscribe((params) => {
      if (params['category']) {
        this.activeCategory.set(params['category'] as MenuCategory);
      }
    });
  }

  setCategory(cat: MenuCategory): void {
    this.activeCategory.set(cat);
  }

  onSearch(val: string): void {
    this.searchQuery.set(val);
  }

  toggleFavorite(id: number, event: Event): void {
    event.stopPropagation();
    this.favorites.update((favs) => {
      const next = new Set(favs);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  addToCart(item: MenuItem, event: Event): void {
    event.stopPropagation();
    this.cartService.addItem(item);
  }

  openQuickView(item: MenuItem): void {
    this.quickViewItem.set(item);
    document.body.style.overflow = 'hidden';
  }

  closeQuickView(): void {
    this.quickViewItem.set(null);
    document.body.style.overflow = '';
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? 1 : 0);
  }

  get categories() { return this.menuService.categories; }
}
