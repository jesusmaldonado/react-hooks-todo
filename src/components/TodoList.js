import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

export default function TodoList({todos = [], addTodo, completeTodo, removeTodo}){

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={todo.text}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}
