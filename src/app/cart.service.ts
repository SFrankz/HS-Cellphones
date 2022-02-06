import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cartItem } from './cartser.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient,) { }
  baseURL : string = "http://localhost:3000/"
  headers = { 'content-type': 'application/json' };
  totalprice:number=0;
  addcartItems(item:cartItems): Observable<any> {
    this.totalprice+=item.price;
    let body = JSON.stringify(item);
    return this.http.post(this.baseURL + 'cartitems', body, {
    headers: this.headers,
    });
    }
  getcart(item:any): Observable<any> {
      return this.http.get(this.baseURL + 'cartitems/?User_id=' + item )
      }
  
  deletecartitem(i): Observable<any> {
    return this.http.delete(this.baseURL + 'cartitems/' + i);
        
    }  
  
          
}
export class cartItems{
  User_id:string;
  name:string;
  serialNumber:number;
  price:number;
  category:string;
  Description:string;
  imgurl:string;
  qnt:number;
  constructor(User_id:string,name:string,serialNumber:number,price:number,category:string,Description:string,imgurl:string,qnt:number){
    this.User_id=User_id;
    this.name=name;
    this.serialNumber=serialNumber;
    this.price=price;
    this.category=category;
    this.Description=Description;
    this.imgurl=imgurl;
    this.qnt=qnt;

  }
}
