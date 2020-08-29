import React from 'react';
import './App.css';

function Todo(props) {

  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
}

export default Todo;
