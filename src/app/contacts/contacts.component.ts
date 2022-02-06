import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  user=[];
  constructor(private UsersService:UsersService) { }
  getconts(){
    this.UsersService.getconts().subscribe((data:any) =>{
    this.user = data;
    
    })
  }
  ngOnInit(): void {
    this.getconts();
  }

}
