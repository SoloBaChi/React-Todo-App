import React from 'react';
import ReactDOM from 'react-dom';
//Component
import TodoContainer from './functionBased/components/TodoContainer';
import {BrowserRouter} from "react-router-dom";

// stylesheet OR you can import it in the parent component
 import './functionBased/App.css';

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <TodoContainer/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root"))