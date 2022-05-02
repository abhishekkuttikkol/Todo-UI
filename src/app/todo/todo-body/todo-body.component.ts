import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-body',
  templateUrl: './todo-body.component.html',
  styleUrls: ['./todo-body.component.css']
})
export class TodoBodyComponent implements OnInit {

  todoInputForm = new FormGroup({
    input: new FormControl("", [Validators.required])
  })

  todos: any = []

  constructor() {

  }

  ngOnInit(): void {
    var todo: any = localStorage.getItem('todo')
    todo = JSON.parse(todo)

    if (todo) {
      this.todos = todo
    }
  }

  addTodo() {
    var input = this.todoInputForm.get('input')!.value

    this.todos.push(input)
    this.todoInputForm.patchValue({
      input: ''
    })

    localStorage.setItem('todo', JSON.stringify(this.todos))
  }

}
