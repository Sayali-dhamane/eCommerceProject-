import { Component, Input } from '@angular/core';
import { CartStore } from '../cart.store';
import { CartItem } from '../../../core/models/cart.model';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input({ required: true }) item!: CartItem;
  constructor(private cartStore: CartStore) { }
  remove() {
    this.cartStore.removeItem(this.item.id);
  }

  onQtyChange(event: Event) {
    const qty = Number((event.target as HTMLInputElement).value);
    this.cartStore.updateQty(this.item.id, qty);
  }
}
