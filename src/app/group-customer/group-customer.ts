import { Component, OnInit } from '@angular/core';
import { CustomerHttp } from '../services/customer-http';
import { ICustomerGroup } from '../classes/icustomer';
@Component({
  selector: 'app-group-customer',
  standalone: false,
  styleUrl: './group-customer.css',
  templateUrl: './group-customer.html',
})
export class GroupCustomer implements OnInit {
  customerGroups: ICustomerGroup[] = [];
  errMessage: string = '';

  constructor(private _service: CustomerHttp) { }

  ngOnInit(): void {
    this._service.getCustomerGroups().subscribe({
      next: (data) => { this.customerGroups = data; },
      error: (err) => { this.errMessage = err.message; }
    });
  }
}
