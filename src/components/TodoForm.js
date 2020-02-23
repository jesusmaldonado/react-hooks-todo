import React, {useState} from 'react';

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        value={value}
        placeholder="Add a sample todo item here"
        onChange={e => setValue(e.target.value)}
      />
    </div>
    </form>
  );
}
