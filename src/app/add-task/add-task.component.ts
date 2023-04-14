import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo, TodoService } from './../service/task.service';
import { Store, Select } from '@ngxs/store';
import { AddItemAction } from './task-actions';
import { Observable } from 'rxjs';
import { TaskSelectors } from './task-selector';
import { TaskModel } from './task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {

  todoForm: FormGroup;

  toDo!: string;

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder,
    private store: Store
  ) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      toDo: ['', Validators.required],
    });
  }

  addTasks() {
    this.store.dispatch(new AddItemAction(this.toDo));
    this.toDo = '';
  }
}
