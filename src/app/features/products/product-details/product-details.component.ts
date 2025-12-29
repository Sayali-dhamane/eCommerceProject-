import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakestoreApiService } from '../../../core/api/fakestore-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartStore } from '../../../features/cart/cart.store';
import { Product } from '../../../core/models/product.model';
import { LoaderComponent } from "../../../shared/components/loader/loader.component";
import { HeaderComponent } from "../../../shared/components/header/header.component";
@Component({
  selector: 'app-product-details',
  imports: [CommonModule, FormsModule, LoaderComponent, HeaderComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product!: Product;
  quantity = 1;
  loading = false;

  constructor(
    private api: FakestoreApiService,
    private route: ActivatedRoute,
    private cartStore: CartStore
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;

    this.api.getProduct(id).subscribe({
      next: res => {
        this.product = res;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) this.quantity--;
  }

  addItem() {
    this.cartStore.addToCart(this.product, this.quantity);
    // alert('Product added to cart!');
  }
}
