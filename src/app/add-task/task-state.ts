import { Injectable } from '@angular/core';
import { Action, Actions, State, StateContext } from '@ngxs/store';
import { AddItemAction, ToggleItemAction, DeleteItemAction } from './task-actions';
import { TaskModel } from './task';

export interface TaskStateModel {
  items: TaskModel[];
}

@State<TaskStateModel>({
  name: 'tasks',
  defaults: {
    items: [],
  },
})


@Injectable()
export class TaskState {

  //call method from the actions
  @Action(AddItemAction)
  //call the state with the current model
  addItem(ctx: StateContext<TaskStateModel>, action: AddItemAction) {
    //name from the constructor in the actions
    const { name } = action;

    if (!name) {
      return;
    }

    //method for ngxs
    const state = ctx.getState();

    const taskItem: TaskModel = {
      id: Math.floor(Math.random() * 1000),
      isDone: false,
      title: name,
    };

    //ngxs method for setting the state
    ctx.setState({
      ...state,
      //get current items with new items
      items: [...state.items, taskItem],
    });

    console.log(ctx.getState());
  }

  @Action(ToggleItemAction)
  toggleItem(ctx: StateContext<TaskStateModel>, action: ToggleItemAction) {
    const state = ctx.getState();

    const newTaskItems = state.items.map((item) => {
      if (item.id === action.id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }

      return item;
    });

    ctx.setState({
      items: [...newTaskItems],
    });
  }

  @Action(DeleteItemAction)
  DeleteItem(ctx: StateContext<TaskStateModel>, action: DeleteItemAction) {
    const state = ctx.getState();
    const filteredArray = state.items.filter(item => item.id !== action.id);

    const newTaskItems = state.items.map((item) => {
      if (item.id === action.id) {
        return {
          ...item
        };
      }

      return item;
    });

    ctx.setState({
      items: filteredArray,
    });
  }
}