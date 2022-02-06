import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService,users } from '../users.service';
import { observable,isObservable } from 'rxjs';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private UsersService:UsersService ,private router: Router) { }
  users:users[];
  usr:users;
  loginForm:FormGroup;
  createLoginForm(){
    this.loginForm=new FormGroup({
      password :new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(19)]),
      email :new FormControl('',[Validators.required,Validators.email]),
      
    });

  }
  
  ngOnInit(): void {
    this.UsersService.getUsrs().subscribe((data: users[]) =>{
      this.users = data;
      })
      this.createLoginForm();
     
  }
  refresh(){
    this.UsersService.getUsrs().subscribe((data: users[]) =>{
    this.users = data;
    
    })
  }

  onSubmit(loginForm){
  
    for(let user of this.users){
      if((user.email == loginForm.value.email) && (user.password == loginForm.value.password)){
        console.log('valid user');
        alert('valid user')
        this.UsersService.saveduser=user;
        this.router.navigateByUrl('/home');
       return;
       }
      }
       
        
        alert('invalid user')
        console.log('inavlid user')
       
       
   
  }

}

