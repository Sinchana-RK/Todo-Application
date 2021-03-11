import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { TaskDetailsComponent } from './task/task-details/task-details.component';

const routes: Routes = [
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'task',loadChildren:()=>import('./task/task.module').then(m=>m.TaskModule)},
  {path : 'login',component:LoginComponent },
  {path: 'signin',component:SigninComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'taskDetails',component:AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,SigninComponent,SignupComponent,AddTaskComponent]
