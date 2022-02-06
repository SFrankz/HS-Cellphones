import { Component, OnInit } from '@angular/core';
import { CartserService } from '../cartser.service';
import { cartItems, CartService } from '../cart.service';
import { UsersService } from '../users.service';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart:CartService,private UsersService:UsersService) { }
  // quantity:number;
  // amount:number;
  cartitems:cartItems[];
  cartitem=new cartItems("","",0,0,"","","",0);
  sum1:number;
  quantity1:number=0;
  ngOnInit(): void {
    // this.amount=this.CartserService.getamount();
    // this.quantity=this.CartserService.getquantity();
    //this.cartitems=this.CartserService.getcartitems();
    this.getcartitem();
    this.sum1=this.cart.totalprice;

  }
getcartitem(){
    this.cart.getcart(this.UsersService.saveduser.id).subscribe((data: cartItems[]) =>{
      this.cartitems = data;
      this.sum();
  })
}
sum(){
  let p=0;
  for(let i of this.cartitems){
    p+=i.price;
  }
  this.sum1=p;
}
deletecart(i){
  this.sum1-=i.price;
  this.cart.totalprice=this.sum1;
    this.cart.deletecartitem(i.id).subscribe((data:cartItems) =>{
          alert('the product has been deleted successfully');
          this.getcartitem();
        })
  }



  pay(){
    window.open("https://www.paypal.com/checkoutnow?locale.x=en_GB&fundingSource=paypal&sessionID=034c749e54_mty6nta6mty&buttonSessionID=0432155309_mty6nta6mjq&env=production&fundingOffered=paypal&logLevel=warn&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWxvYmplY3RzLmNvbS9hcGkvY2hlY2tvdXQuanMifQ&uid=75bf6cf13f&version=4&token=EC-09A0260460405341N&xcomponent=1","","width=500,height=650")
  }

  // inc(proudct){
  //   this.CartserService.inc(proudct);
  // }
  // dec(proudct){
  //   this.CartserService.dec(proudct);
  // }
  //  check(){
  //    if(this.CartserService.cartitems!=[])
  //    this.flag=true;
  //  }
  // removeall(){
  //   this.cartitems = [];
  //   this.amount=0;
  //   this.quantity=0;
  //   this.CartserService.removeall();
  //   alert('all items removed')

  // }

}
