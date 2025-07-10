import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ProductSearchComponent } from '../product-search/product-search.component';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ProductSearchComponent
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit{
  formProduct!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ){}

  ngOnInit(): void {
    this.initForm();
  }

  // Método para inicializar el formulario del producto
  initForm(): void{
    this.formProduct = this.fb.group({
      code_reference: ['', Validators.required],
      name: ['', Validators.required],
      unit_measure_id: [],
      note: [''],
      // tax_rate: [0],
      // is_excluded: [],
      // standard_code_id: [0],
      // quantity: [0],
      // discount_rate: [0],
      // price: [0],
    });
  }

  // Método para enviar el formulario
  onSubmit():void{
    if (this.formProduct.valid){  
      this.productService.addProduct(this.formProduct.value);
      this.formProduct.reset();
      alert('Producto agregado exitosamente');
    }else{
      alert('Por favor, complete todos los campos requeridos');
    }
  }


}
