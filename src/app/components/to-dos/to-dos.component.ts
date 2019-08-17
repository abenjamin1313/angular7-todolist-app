import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/ToDo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.sass']
})
export class ToDosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });   
  }

  deleteTodo(todo:Todo) {
    // remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
        this.todos.push(todo);
    });
  }
}
