import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  dataset: Product[] = [];

  constructor() { }

  // Método para agregar un producto al dataset
  addProduct(product: Product):void{
    this.dataset.push(product);
  }

  // Método para obtener un producto por su ID
  getProductById(id:string): Product | undefined{
    return this.dataset.find(product => product.id === id);
  }

  // Método para filtrar productos por nombre o codigo
  filterProductByNameOrCode(searchTerm: string): Product[]{
    return this.dataset.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.code_reference.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
