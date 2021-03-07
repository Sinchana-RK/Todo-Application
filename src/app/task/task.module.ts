import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { OperationsComponent } from './operations/operations.component';



@NgModule({
  declarations: [AddTaskComponent, TaskDetailsComponent, OperationsComponent],
  imports: [
    CommonModule
  ]
})
export class TaskModule { }
