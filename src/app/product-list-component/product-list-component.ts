import { Component } from '@angular/core';
import { Product } from '../classes/iProduct';
@Component({
  selector: 'app-product-list-component',
  standalone: false,
  styleUrl: './product-list-component.css',
  templateUrl: './product-list-component.html',
})
export class ProductListComponent {
  products:Product[]=[
    {id:1, name:'ÍP8', price:100, image:'https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large_2x.jpg'},
    {id:2, name:'Samsung S21', price:-200, image:'https://tse1.mm.bing.net/th?id=OIF.tj7HmD4uM%2bZ3aAYP8JKilA&r=0&pid=Api&h=220&P=0'},
    {id:3, name:'Xiaomi M1 11', price:300, image:'https://tse1.mm.bing.net/th?id=OIF.uDvkCOWw0eEBPYf7hvi%2fGg&r=0&pid=Api&h=220&P=0'},
    {id:4, name:'Macbook Pro 2', price:-400, image:'https://tse4.mm.bing.net/th/id/OIP.ZzQQFObj2ex-ARKBVxxDPAHaFj?r=0&pid=Api&h=220&P=0'},
    {id:5, name:'Dell inspiron', price:500, image:'https://tse4.mm.bing.net/th/id/OIP.ZzQQFObj2ex-ARKBVxxDPAHaFj?r=0&pid=Api&h=220&P=0'}
  ]
}
