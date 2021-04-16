import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthcComponent } from './authc/authc.component';

import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes:
Routes=[
    {
        path:'', component: AuthcComponent, // common/landing component for all authentication related works, it provides the essential background
        children: [
            { path: '', component: LoginComponent },
            {path:'signin', component: SigninComponent},
            {path:'signup', component: SignupComponent}
        ]
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }