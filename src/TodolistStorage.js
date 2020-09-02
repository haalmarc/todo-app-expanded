import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';

function TodolistStorage() {
  // 4. Hente lokallagring, ellers starte med en tom liste.
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todolist')) || []);
  const [text, setText] = useState('');

  // Ved endringer på todolista, oppdater også lokallagring. 
  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(todos));
  }, [todos]);

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
    // 3. Resete tekst
    setText('');
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

export default TodolistStorage;
