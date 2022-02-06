import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ShsService {
  baseURL : string = "http://localhost:3000/"
headers = { 'content-type': 'application/json' };
bla=0;

getProducts(): Observable<any> {
  return this.http.get(this.baseURL + 'products');
  }
  getItems(): Observable<any> {
    return this.http.get(this.baseURL + 'items');
    }
  getNewItems(): Observable<any> {
      return this.http.get(this.baseURL + 'NewItems');
      }

      stam(){
          this.bla=1;
      }

  constructor(private http: HttpClient) {}
}
export class Product{
  name:string;
  serialNumber:number;
  price:number;
  category:string;
  Description:string;
  imgurl:string;
  qnt:number;

  constructor(name:string,serialNumber:number,price:number,category:string,Description:string,imgurl:string,qnt:number){
    this.name=name;
    this.serialNumber=serialNumber;
    this.price=price;
    this.category=category;
    this.Description=Description;
    this.imgurl=imgurl;
    this.qnt=qnt;

  }

}
