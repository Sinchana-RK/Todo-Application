import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  constructor(private crudService: CrudService){}

  ngOnInit() {
    console.log(this.crudService.showTasks);
  }
}
