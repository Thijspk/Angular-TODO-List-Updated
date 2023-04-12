import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Todo, TodoService } from './../service/task.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css'],
})
export class ViewTasksComponent implements OnInit {
  todos: Observable<Todo[]>;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.todos;
  }

  completeTask(event: any, index) {
    console.log(event.checked);
    this.todoService.updateList(index, event.checked);
  }

  deleteTask(todoId: number) {
    this.todoService.delete(todoId);
  }
}
