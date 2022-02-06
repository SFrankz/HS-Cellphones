import { Component,Input, OnInit, ViewChild } from '@angular/core';
import { ShowitemComponent } from '../showitem/showitem.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
    }
    @ViewChild(SidebarComponent) sidebar?: SidebarComponent;
    
}
