import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor(private UsersService:UsersService) { }

  ngOnInit(): void {
    this.saveduser=this.UsersService.saveduser;
  }
  saveduser:any;
 
}
