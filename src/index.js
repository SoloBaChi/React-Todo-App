import React from 'react';
import ReactDOM from 'react-dom';
//Component
import TodoContainer from './components/TodoContainer';

// stylesheet OR you can import it in the parent component
import './App.css';

ReactDOM.render(
    <React.StrictMode>
      <TodoContainer/>
    </React.StrictMode>,
    document.getElementById("root"))