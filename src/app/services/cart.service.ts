import { Injectable, signal, computed } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly cartItems = signal<CartItem[]>([]);

  readonly items = this.cartItems.asReadonly();
  readonly itemCount = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.quantity, 0)
  );
  readonly total = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0)
  );

  addItem(menuItem: MenuItem): void {
    const existing = this.cartItems().find((i) => i.menuItem.id === menuItem.id);
    if (existing) {
      this.cartItems.update((items) =>
        items.map((i) =>
          i.menuItem.id === menuItem.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      this.cartItems.update((items) => [...items, { menuItem, quantity: 1 }]);
    }
  }

  removeItem(id: number): void {
    this.cartItems.update((items) => items.filter((i) => i.menuItem.id !== id));
  }

  updateQuantity(id: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeItem(id);
      return;
    }
    this.cartItems.update((items) =>
      items.map((i) => (i.menuItem.id === id ? { ...i, quantity } : i))
    );
  }

  clearCart(): void {
    this.cartItems.set([]);
  }

  isInCart(id: number): boolean {
    return this.cartItems().some((i) => i.menuItem.id === id);
  }
}
