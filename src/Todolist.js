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
    // 1. Bevare id i todo, derfor lage objekt istedenfor streng. 
    const tempObject = {
      text,
      id: new Date().getTime(),
    }
    setTodos([tempObject, ...todos]);
  }

  // 2. Lage slettefunksjon
  function deleteTodo(id) {
    const filteredList = todos.filter((todo) => todo.id !== id);
    setTodos(filteredList);
  }

  return (
    <div>
      <form>
        <input value={text} onChange={handleTextChange} />
        <button onClick={addTodo}>+</button>
      </form>
      {todos.map((todo) => <Todo text={todo.text} key={todo.id} id={todo.id} onClick={deleteTodo} />)}
    </div>
  );
}

export default Todolist;
