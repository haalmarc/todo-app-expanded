import React from 'react';
import './App.css';

function Todo(props) {

  return (
    <div>
      <span>{props.text}<button onClick={() => props.onClick(props.id)}>X</button></span>
    </div>
  );
}

export default Todo;
