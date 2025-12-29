import { Injectable, signal, computed, effect } from '@angular/core';
import { CartItem } from '../../core/models/cart.model';
import { storage } from '../../core/utils/storage';

const CART_KEY = 'cart_items';

@Injectable({ providedIn: 'root' })
export class CartStore {
  private initialCart: CartItem[] = storage.get(CART_KEY) || [];
  items = signal<CartItem[]>(this.initialCart);
  subtotal = computed(() =>
    this.items().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  constructor() {
    effect(() => {
      storage.set(CART_KEY, this.items());
    });
  }
  addToCart(product: any, qty: number) {
    const cart = this.items();
    const existing = cart.find(i => i.id === product.id);

    if (existing) {
      existing.quantity += qty;
      this.items.set([...cart]);
    } else {
      const newItem: CartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: qty,
        productId: 0
      };
      this.items.set([...cart, newItem]);
    }
  }

  removeItem(id: number) {
    this.items.set(this.items().filter(i => i.id !== id));
  }

  updateQty(id: number, qty: number) {
    const cart = this.items();
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.quantity = qty;
    this.items.set([...cart]);
  }
}
