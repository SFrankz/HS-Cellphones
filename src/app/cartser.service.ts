import { Injectable } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {users } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CartserService {

  constructor(private http: HttpClient) { }
  quantity:number=0;
  amount:number=0;
  cartitems:any=[];
  baseURL : string = "http://localhost:3000/"
  headers = { 'content-type': 'application/json' };
  getquantity(){
    return this.quantity;
  }
  getamount(){
    return this.amount;
  }
  getCartitems(): Observable<any> {
    return this.http.get(this.baseURL + 'cartitems');
    }
  addcartItems(usr: users): Observable<any> {
      let body = JSON.stringify(usr);
      return this.http.post(this.baseURL + 'cartitems', body, {
      headers: this.headers,
      });
      }
  addtocart(proudct){
    this.cartitems.push(proudct);
    this.quantity+=1;
    this.amount+=proudct.price;
  }
   tmp:number=0;
  inc(proudct){
    this.tmp=proudct.price
    proudct.qnt+=1;
    this.quantity+=1;
    this.amount+=proudct.price;
    // if(proudct.qnt<0){
    //   proudct.price=0;
    // }
    // else{
    //   proudct.price=this.tmp;
    // }
    console.log("INC Q : "+this.quantity)
    console.log("INC A : "+this.amount)
  

  }
  dec(proudct){
    proudct.qnt-=1;
    this.amount-=proudct.price;
    this.quantity-=1;
    

  if(proudct.qnt<0)
    proudct.qnt=0;
  if (this.amount<0 && proudct.qnt!=0){
    this.amount=0;
    return;}
  if(this.quantity<0){
      this.quantity=0;
      return;
     
    }
    // if(proudct.qnt<0){
    //   proudct.price=0;
    // }
    // else{
    //   proudct.price=this.tmp;
    // }
  
    
    console.log("DEC Q : "+this.quantity)
    console.log("DEC A : "+this.amount)
  }
  getcartitems(){
    return this.cartitems;
  }
  removeall(){
    
    this.quantity=0;
    this.amount=0;
    this.cartitems=[];

  }
  // "cartItems": [{"userid":"ds","prodcts":}]
}
export class cartItem{
  productId:string;
  UserId:string;
}
