import { Component, Input } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { RouterLink } from '@angular/router';
import { LoaderComponent } from "../../../shared/components/loader/loader.component";

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
