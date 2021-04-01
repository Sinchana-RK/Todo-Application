import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { OperationsComponent } from './operations/operations.component';
import { TaskRoutingModule } from './task-routing.module';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [AddTaskComponent, TaskDetailsComponent, OperationsComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class TaskModule { }
