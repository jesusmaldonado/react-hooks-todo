import React from 'react';

const Todo = ({todo, index, completeTodo, removeTodo}) => {
  console.log(todo)
  const handleCompleteClick = (evt) => {
    completeTodo(index);
  };
  const handleRemoveClick = (evt) => {
    removeTodo(index);
  }
  return (
    <div
      className="card w-auto p-3"
      style={{'textDecoration': todo.isCompleted ? 'line-through': ''}}>
      <div className="card-header">
        {todo.text}
      </div>
      <div className="card-body text-right">
        <button className="btn btn-primary mr-1" type="button" onClick={handleCompleteClick}>
          Complete
        </button>
        <button className="btn btn-danger" onClick={handleRemoveClick}>x</button>
      </div>

  </div>);
};

export default Todo;
