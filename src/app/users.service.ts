import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  saveduser=new users('','','',"","");
  baseURL : string = "http://localhost:3000/"
  headers = { 'content-type': 'application/json' };
    constructor(private http: HttpClient) { }
  getUsrs(): Observable<any> {
      return this.http.get(this.baseURL + 'users');
      }
  getconts(): Observable<any> {
    return this.http.get(this.baseURL + 'conts');
    }
  addUsr(usr: users): Observable<any> {
        let body = JSON.stringify(usr);
        return this.http.post(this.baseURL + 'users', body, {
        headers: this.headers,
        });
        }    
  }
  export class users{
      name:string;
      email:string;
      password:string;
      id:string;
      img:string;
   

      constructor(name:string,email:string,password:string,id:string,img:string) {
        this.name=name;
        this.email=email;
        this.password=password;
        this.id=id;
        this.img=img;
        

       }
       
}

