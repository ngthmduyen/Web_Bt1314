import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ICustomerGroup } from '../classes/icustomer';
@Injectable(
    {
  providedIn: 'root'
}
)
export class CustomerHttp {
   private _url: string = './assets/data/customers.json';

  constructor(private _http: HttpClient) { }

  getCustomerGroups(): Observable<ICustomerGroup[]> {
    return this._http.get<ICustomerGroup[]>(this._url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message || 'Lỗi tải dữ liệu khách hàng!'));
  } 
}
