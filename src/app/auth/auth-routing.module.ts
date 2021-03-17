import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes:
<<<<<<< HEAD
Routes=[{path:'', component: LoginComponent},
{path:'signin', component: SigninComponent},
{path:'signup', component: SignupComponent}
];

=======
    Routes = [
        { path: '', component: LoginComponent },
        { path: 'signin', component: SigninComponent },
        { path: 'signup', component: SignupComponent }
    ];
>>>>>>> 7cdb73e9e2675ab91b5bc204ae35ec7ec2567b8c

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }