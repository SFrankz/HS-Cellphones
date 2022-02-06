import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatagoriesComponent } from './catagories/catagories.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShowitemComponent } from './showitem/showitem.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { SubComponent } from './sub/sub.component';
import { RegComponent } from './reg/reg.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    ContactsComponent,
    LoginComponent,
    PageNotFoundComponentComponent,
    CatagoriesComponent,
    SidebarComponent,
    ShowitemComponent,
    UserinfoComponent,
    SubComponent,
    SignupComponent,
    MoreinfoComponent,
    //RegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
