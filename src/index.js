import React from 'react';
import ReactDOM from 'react-dom';
//Component
import TodoContainer from './functionBased/components/TodoContainer';
import {HashRouter as Router} from "react-router-dom";

// stylesheet OR you can import it in the parent component
 import './functionBased/App.css';

ReactDOM.render(
    <React.StrictMode>
      <Router>
      <TodoContainer/>
      </Router>
    </React.StrictMode>,
    document.getElementById("root"))