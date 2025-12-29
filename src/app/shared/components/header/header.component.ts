import { Component } from '@angular/core';
import { CartStore } from '../../../features/cart/cart.store';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { CartComponent } from '../../../features/cart/cart/cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  items;

  constructor(public cartStore: CartStore) {
    this.items = cartStore.items;
  }
}
