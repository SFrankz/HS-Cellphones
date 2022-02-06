import { Component, OnInit } from '@angular/core';
import { UsersService,users } from '../users.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    usr:users=new users("","","","","");
  constructor(private UsersService:UsersService,private router:Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
  loginForm:FormGroup;
  createLoginForm(){
    this.loginForm=new FormGroup({
      password :new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(19)]),
      email :new FormControl('',[Validators.required,Validators.email]),
      name :new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(9)]),
      img :new FormControl('',[Validators.required]),
      id :new FormControl('',[Validators.required,Validators.minLength(9),Validators.maxLength(9)]),

      
    });

  }
  onsubmit(loginForm){
    this.router.navigateByUrl('/login');
  }
  refresh(){
    this.UsersService.getUsrs().subscribe((data: users) =>{
    this.usr = data;
    })
  }
  addUsr(){
    this.UsersService.addUsr(this.usr).subscribe((data:users) =>{
      alert('the User information has been added successfully');
      this.refresh();
    })
  }
}
