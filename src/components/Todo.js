import React from 'react';

const Todo = ({todo, index, completeTodo, removeTodo}) => {
  console.log(todo)
  const handleCompleteClick = (evt) => {
    completeTodo(index);
  };
  const handleRemoveClick = (evt) => {
    removeTodo(index);
  }
  return (<div
      className="todo card-content"
      style={{'text-decoration': todo.isCompleted ? 'line-through': ''}}>
    {todo.text}
    <button type="button" onClick={handleCompleteClick}>
      Complete
    </button>
    <button onClick={handleRemoveClick}>x</button>
  </div>);
};

export default Todo;
