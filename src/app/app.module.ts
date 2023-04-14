import { EnvironmentInjector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from 
    '@angular/platform-browser/animations';
// import {MatTableModule, MatPaginatorModule, MatSortModule }
import { MatInputModule} from '@angular/material/input';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { TodoService } from './service/task.service';
import { NgxsModule } from '@ngxs/store';


import { environment } from 'src/environment/environment';
import { TaskState } from './add-task/task-state';

@NgModule({
  imports: [BrowserModule, MatSortModule,MatPaginatorModule,MatTableModule,MatInputModule,BrowserAnimationsModule,FormsModule, ReactiveFormsModule, NgxsModule.forRoot([TaskState], {
    developmentMode: !environment.production,
  }),
],
  declarations: [
    AppComponent,
    HelloComponent,
    AddTaskComponent,
    ViewTasksComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TodoService],
})
export class AppModule { }
