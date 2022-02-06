import { Component,Input, OnInit } from '@angular/core';
import { ShsService,Product } from '../shs.service';
import { CartserService } from '../cartser.service';
import { cartItems, CartService } from '../cart.service';
import { UsersService } from '../users.service';

//make alert for the add to cart
@Component({
  selector: 'app-showitem',
  templateUrl: './showitem.component.html',
  styleUrls: ['./showitem.component.css']
})
export class ShowitemComponent implements OnInit {
  @Input() selecteditem:string;
  
  constructor(private ShsService:ShsService,private cart:CartService,private user :UsersService) { }
  product:any=[];
  ngOnInit(): void {
    this.ShsService.getProducts();
    this.refresh();
  }
  // // name:string;
  // serialNumber:number;
  // price:number;
  // category:string;
  // Description:string;
  // imgurl:string;
  // qnt:number;
  addtocart(proudct){
    let cartItem=new cartItems(this.user.saveduser.id,proudct.name,proudct.serialNumber,proudct.price,proudct.category,proudct.Description,proudct.imgurl,proudct.qnt);
    this.cart.addcartItems(cartItem).subscribe((data:cartItems) =>{
      alert('item added successfully');
    })
    //this.cart.totalprice+=cartItem.price;
  }
  refresh(){
    this.ShsService.getProducts().subscribe((data: Product[]) =>{
    this.product = data;
    })
  }
 }
  // addtocart(proudct){
  //   this.CartserService.addtocart(proudct);
  //   alert('item added to cart')
  // }


