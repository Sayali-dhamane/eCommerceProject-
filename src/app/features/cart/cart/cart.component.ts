import { Component } from '@angular/core';
import { CartStore } from '../../cart/cart.store';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { CartItemComponent } from "../cart-item/cart-item.component";
@Component({
  selector: 'app-cart',
  imports: [CommonModule, HeaderComponent, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  items;
  subtotal;

  constructor(public cartStore: CartStore) {
    this.items = cartStore.items;
    this.subtotal = cartStore.subtotal;
  }
}
