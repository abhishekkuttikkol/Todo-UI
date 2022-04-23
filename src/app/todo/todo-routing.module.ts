import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoHeaderComponent } from '../todo-header/todo-header.component';

const routes: Routes = [
  {
    path: '',
    component: TodoHeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
