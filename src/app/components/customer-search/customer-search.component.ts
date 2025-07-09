import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../sevices/customers.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Customer } from '../../models/customer';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from '../client-form/client-form.component';
import { ClientDetailComponent } from '../client-detail/client-detail.component';

@Component({
  selector: 'app-customer-search',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule,
    ClientFormComponent, ClientDetailComponent
  ],
  templateUrl: './customer-search.component.html',
  styleUrl: './customer-search.component.css'
})
export class CustomerSearchComponent implements OnInit{
  searchClient = new FormControl("", {
    nonNullable: true
  });
  
  recivedCustomer: Customer | undefined;

  dataset: Customer[] = [];

  hideDisplay: string = "none";

  constructor(
    // private fb: FormBuilder,
    private customerService: CustomersService
  ){}

  ngOnInit(): void {
  }

  // Método para inicializar el formulario de búsqueda
  

  // Método para buscar la información de un cliente por su nombre o ID
  searchCustomer(): void {
    var result = this.customerService.filterCustomerByNameOrIdentification(this.searchClient.value);
    this.dataset = result ? result : [];

    if (this.dataset.length > 0) {
      this.hideDisplay = "block";
    }
    //   const customer = this.customerService.dataset.find(c => 
    //     c.names.toLowerCase().includes(searchValue) || c.id.toLowerCase() === searchValue
    //   );
    //   console.log(searchValue);

    // } else {
    //   console.log('Por favor, ingrese un nombre o ID de cliente válido.');
    // }
  }

  // Método para seleccionar un cliente de la lista de resultados
  selectedCustomer(customer: Customer):void{
    this.recivedCustomer = customer;
    this.hideDisplay = "none";
  }
}
