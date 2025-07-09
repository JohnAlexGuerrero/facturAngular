import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private customerSubject = new Subject<Customer | undefined>();
  // customer$ = this.customerSubject.asObservable();
  customer: Customer | undefined;

  dataset: Customer[] = [];

  constructor() { }

  // Método para agregar un cliente al dataset
  addCustomer(customer: Customer): void {
    this.dataset.push(customer);
    console.log(this.dataset);
  }

  // Método para obtener los datos de un cliente por su ID
  getCustomerById(id: string): Customer | undefined {
    return this.dataset.find(customer => customer.id === id);
  }


  // Método para buscar un cliente por su nombre
  filterCustomerByNameOrIdentification(value: string): Customer[] | undefined {
    return this.dataset.filter(
      customer => customer.names.toLowerCase().includes(value.toLowerCase())
      || customer.identification.includes(value)
    );
  }

  // Método para buscar un cliente por su número de identificación
  filterCustomerByIdentification(identification: string): Customer[] | undefined {
    return this.dataset.filter(customer => customer.identification.includes(identification));
  }

  // Método que envia la información del cliente por medio de un subject
  sendData(customer: Customer): void{
    this.customerSubject.next(customer);
  }

  
}
