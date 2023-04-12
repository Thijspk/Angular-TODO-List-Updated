import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Todo, TodoService } from './../service/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  todoForm: UntypedFormGroup;

  constructor(
    private todoService: TodoService,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      todo: ['', Validators.required],
    });
  }

  addTasks() {
    this.todoService.create({
      value: this.todoForm.controls.todo.value,
      completed: false,
    });
    this.todoForm.reset();
  }
}
