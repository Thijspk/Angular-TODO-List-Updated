import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TaskSelectors } from '../add-task/task-selector';
import { TaskModel } from '../add-task/task';
import { Store, Select } from '@ngxs/store';
import { AddItemAction, ToggleItemAction, DeleteItemAction } from '../add-task/task-actions';
import { Todo, TodoService } from './../service/task.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css'],
})
export class ViewTasksComponent implements OnInit {

  @Select(TaskSelectors.taskItems) taskItems$!: Observable<TaskModel[]>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  completeTask(taskItem: TaskModel) {
    this.store.dispatch(new ToggleItemAction(taskItem.id));
  }

  deleteTask(taskItem: TaskModel) {
    this.store.dispatch(new DeleteItemAction(taskItem.id))
  }
}
