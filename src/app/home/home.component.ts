import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ShsService,Product } from '../shs.service';
import { cartItems, CartService } from '../cart.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
users=[];
newitems:Product[];
items:Product[];
product:Product[];
usr:any;
prdct=new Product("",0,0,"","","",0);

  constructor(private UsersService:UsersService,private ShsService:ShsService,private cart:CartService) { 

  }
  

  ngOnInit(): void {

    this.usr=this.UsersService.saveduser;
    this.refreshItems();
   
  }
  refresh(){
    this.ShsService.getProducts().subscribe((data: Product[]) =>{
    this.product = data;
    })
  }
  // addtocart(proudct){
  //   this.CartserService.addtocart(proudct);
  //   alert('item added to cart')
  // }
  refreshItems(){
    this.ShsService.getItems().subscribe((data: Product[]) =>{
      this.items = data;
      console.log(data);
      this.ShsService.getNewItems().subscribe((data: Product[]) =>{
        this.newitems = data;
        console.log(data);

        });
      });
      
      
  }
  addtocart(proudct){
    let cartItem=new cartItems(this.UsersService.saveduser.id,proudct.name,proudct.serialNumber,proudct.price,proudct.category,proudct.Description,proudct.imgurl,proudct.qnt);
    this.cart.addcartItems(cartItem).subscribe((data:cartItems) =>{
      alert('item added successfully');
    })
  }
  bla(){
    this.ShsService.stam();
  }
 
        
}
