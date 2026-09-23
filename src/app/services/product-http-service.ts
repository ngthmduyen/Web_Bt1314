import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../classes/iProduct';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {
    private _url:string="/datasets/products.json"
    constructor(private _http:HttpClient){}
        getProductList():Observable<Product[]>
        {
            return this._http.get<Product[]>(this._url)
        }
    }

