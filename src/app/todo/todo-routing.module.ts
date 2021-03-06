import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoBodyComponent } from './todo-body/todo-body.component';

const routes: Routes = [
  {
    path: '',
    component: TodoBodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
