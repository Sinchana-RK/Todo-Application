import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { OperationsComponent } from './operations/operations.component';
import { TaskRoutingModule } from './task-routing.module';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { EditTaskComponent } from './edit-task/edit-task.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [AddTaskComponent, TaskDetailsComponent, OperationsComponent, EditTaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class TaskModule { }
