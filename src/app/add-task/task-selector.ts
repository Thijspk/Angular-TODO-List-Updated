import { Selector } from '@ngxs/store';
import { TaskState, TaskStateModel } from './task-state';
import { TaskModel } from './task';

export class TaskSelectors {
    //get or select from task state
    @Selector([TaskState])
    static taskItems(state: TaskStateModel): TaskModel[] {
        return state.items;
    }
}