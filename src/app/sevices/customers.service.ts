import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  dataset: Customer[] = [];

  constructor() { }

  // Método para agregar un cliente al dataset
  addCustomer(customer: Customer): void {
    this.dataset.push(customer);
    console.log(this.dataset);
  }
}
