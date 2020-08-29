import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';

function Todolist() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  function handleTextChange(e) {
    const inputText = e.target.value;
    setText(inputText);
  }

  function addTodo(e) {
    e.preventDefault();
    setTodos([text, ...todos])
  }

  return (
    <div>
      <form>
        <input value={text} onChange={handleTextChange} />
        <button onClick={addTodo}>+</button>
      </form>
      {todos.map((todo) => <Todo text={todo} />)}
    </div>
  );
}

export default Todolist;
