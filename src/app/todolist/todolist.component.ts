import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todoText = '';
  todos: string[] = [];
  isEditMode = false;
  updateTodoIndex = -1;

  constructor() {}
  ngOnInit() {}

  addTodo() {
    this.todos.push(this.todoText);
    this.todoText = '';
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  editTodo(index: number) {
    this.updateTodoIndex = index;
    this.isEditMode = true;
    this.todoText = this.todos[this.updateTodoIndex];
  }

  updateTodo() {
    this.todos[this.updateTodoIndex] = this.todoText;
    this.isEditMode = false;
    this.updateTodoIndex = -1;
    this.todoText = '';
  }

}
