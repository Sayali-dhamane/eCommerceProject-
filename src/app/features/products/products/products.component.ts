import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';

import { FakestoreApiService } from '../../../core/api/fakestore-api.service';
import { Product } from '../../../core/models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    HeaderComponent,
    LoaderComponent,
    RouterModule,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[] = [];
  categories: string[] = [];
  loading = false;

  constructor(private api: FakestoreApiService, private router: Router) { }

  ngOnInit() {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.loading = true;
    this.api.getProducts().subscribe({
      next: res => {
        this.products = res;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  loadCategories() {
    this.api.getCategories().subscribe(res => this.categories = res);
  }

  onCategoryChange(event: Event) {
    const category = (event.target as HTMLSelectElement).value;
    this.loading = true;

    if (!category) {
      this.loadProducts();
    } else {
      this.api.getProductsByCategory(category).subscribe({
        next: res => {
          this.products = res;
          this.loading = false;
        },
        error: () => this.loading = false
      });
    }
  }

  openDetails(id: number) {
    this.router.navigate(['/products', id]);
  }
}
