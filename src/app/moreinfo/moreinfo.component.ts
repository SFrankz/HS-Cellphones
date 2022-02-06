import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShsService,Product } from '../shs.service';

@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrls: ['./moreinfo.component.css']
})
export class MoreinfoComponent implements OnInit {
  product:Product[];
  items:Product[];
  ngOnInit(): void {
    if(this.ShsService.bla==1){
      this.refresh1();
      this.ShsService.bla=0;
    }
    else{
    this.refresh();}
    
    
  }

  constructor(private actRoute: ActivatedRoute,private ShsService:ShsService ) { 
    this.serlnum = this.actRoute.snapshot.params["serialNumber"];

  }
  
  currentProduct=new Product("",0,0,"","","",0);
  serlnum:number;
  refresh(){
    this.ShsService.getProducts().subscribe((data: Product[]) =>{
    this.product = data;
    this.searchProduct(this.product); 

    })
  }
  searchProduct(product){
    for(let i=0;i<product.length;i++){
    if(this.serlnum==product[i].serialnumber){
      this.currentProduct=product[i];
    }

  }}
  refresh1(){
    this.ShsService.getItems().subscribe((data: Product[]) =>{
    this.items = data;
    this.searchProductItems(this.items); 
    })
  }
  searchProductItems(items){
    for(let i=0;i<items.length;i++){
    if(this.serlnum==items[i].serialnumber){
      this.currentProduct=items[i];
    }

  }}
  
  


}
