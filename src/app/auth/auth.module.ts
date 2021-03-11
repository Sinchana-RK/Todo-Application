import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthcComponent } from './authc/authc.component';



@NgModule({
  declarations: [LoginComponent, SigninComponent, SignupComponent, AuthcComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }