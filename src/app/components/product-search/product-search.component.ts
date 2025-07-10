import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule
  ],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})
export class ProductSearchComponent {
  productSearch = new FormControl("", {
    nonNullable: true
  });

  hideDisplay = true;

  dataset: Product[] = [];

  constructor(
    private ProductService: ProductService
  ) {}

  // Método para seleccionar un producto
  onProductSelected(product: Product):void{

  }

  onSearch(){
    var result = this.ProductService.filterProductByNameOrCode(this.productSearch.value);
    this.dataset = result ? result : [];

    if (this.dataset.length > 0) {
      this.hideDisplay = false;
    }
  }

}
