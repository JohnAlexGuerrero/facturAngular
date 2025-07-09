import { Component, Input } from '@angular/core';
import { CustomersService } from '../../sevices/customers.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent {
  @Input() customer: any;

  constructor(
    private customerService: CustomersService
  ){}

  initCustomerDetail(id:string):void{
    this.customer = this.customerService.getCustomerById(id);
  }

}
