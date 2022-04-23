import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoBodyComponent } from './todo-body/todo-body.component';


@NgModule({
  declarations: [
    TodoBodyComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
