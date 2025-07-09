import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CustomersService } from '../../sevices/customers.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [
  ],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent implements OnInit, OnDestroy{
  @Input() recivedCustomer: Customer | undefined;
  // private subscription: Subscription = new Subscription();

  constructor(
    private customerService: CustomersService
  ){}

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    // this.subscription = this.customerService.customer$.subscribe(data => {
    //   this.recivedCustomer = data;
    //   console.log(data);
    // })
  }


}
;