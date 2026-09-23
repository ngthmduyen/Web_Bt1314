import { Component } from '@angular/core';
import { ProductHttpServiceBai15 } from '../services/product-http-service-bai15';
@Component({
  selector: 'app-service-product-http',
  standalone: false,
  templateUrl: './service-product-http.html',
})
export class ServiceProductHttp {
  products:any;
constructor(private _service: ProductHttpServiceBai15){
this._service.getProducts().subscribe({
next:(data)=>{this.products=data}
})
}
}
