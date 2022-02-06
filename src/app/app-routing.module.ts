import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { SubComponent } from './sub/sub.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

const routes: Routes = [
  {
    path: '',pathMatch:'full',redirectTo:'login'
    },
    {
      path: 'products/:serialNumber',component:MoreinfoComponent
    },
    {
  path: 'products',component:ProductsComponent
      }, 
  {
  path: 'cart',component:CartComponent
            },
             {
  path: 'sub',component:SubComponent
            },
   {
      path: 'home/:serialNumber',component:MoreinfoComponent
   },
  {
  path: 'home', component: HomeComponent
  },
  {
  path: 'login',component:LoginComponent
    },
     {
  path: 'contacts',component:ContactsComponent
    },
    {
  path: 'userinfo',component:UserinfoComponent
    }, 
    {
  path: 'signup',component:SignupComponent
    },
  {
  path: '**',component:PageNotFoundComponentComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
