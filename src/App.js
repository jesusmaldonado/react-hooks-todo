import React, {useState, useCallback} from 'react';
import './App.css';
import TodoList from './components/TodoList';
function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about React" , isCompleted: false},
    { text: "Meet friend for lunch" , isCompleted: false},
    { text: "Build really cool todo app" , isCompleted: false}
  ]);
  const addTodo = text => {
      const newTodos = [...todos, {text}];
      setTodos(newTodos);
  };
  const completeTodo = useCallback(index => {
    const newTodos = [...todos];
    newTodos[index]['isCompleted'] = true;
    setTodos(newTodos);
  }, [todos])
  const removeTodo = useCallback(index => {
    const newTodos = todos.filter((t, idx) => idx !== index);
    setTodos(newTodos);
  });
  return (
    <div className="app">
      <h1> ToDo List  </h1>
      <TodoList todos={todos} addTodo={addTodo} completeTodo={completeTodo} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
