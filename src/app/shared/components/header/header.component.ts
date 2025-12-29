import { Component } from '@angular/core';
import { CartStore } from '../../../features/cart/cart.store';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CartComponent } from '../../../features/cart/cart/cart.component';
import { storage } from '../../../core/utils/storage';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  items;

  constructor(public cartStore: CartStore, private router: Router,) {
    this.items = cartStore.items;
  }

  logout() {
    // Remove token or any stored auth info
    storage.remove('token');

    // Optionally, clear cart or other state
    this.cartStore.items.set([]);

    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
