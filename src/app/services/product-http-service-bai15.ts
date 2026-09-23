import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct15 } from '../classes/iproduct15';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ProductHttpServiceBai15 {
    private _url:string="./assets/data/products.json";
constructor(private _http: HttpClient) { }
getProducts():Observable<IProduct15[]>{
return this._http.get<IProduct15[]>(this._url)
}
}
