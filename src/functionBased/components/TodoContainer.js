import React,{useState,useEffect} from 'react';
import Header from './Header';
import {Route, Switch} from "react-router-dom";
import Navbar from './Navbar';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import About from "../pages/AboutComponent";
import NotMatch from "../pages/NotMatchComponent";
import {v4 as uuidv4} from 'uuid';


function TodoContainer(props){
    const[todos,setTodos] = useState(getInitialTodos())

 const handleChange = id =>{
        setTodos(previousState =>
            previousState.map(todo => {
                if(todo.id === id){
                    return{
                        ...todo,
                       completed: !todo.completed,
                    }
                }
                return todo;
            })
            )
    }

 const deleteTodo = id => {
        setTodos(
             [...todos.filter(todo => todo.id !== id)]
        )
    }

  const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        setTodos([newTodo,...todos])
    }

    const setUpdate = (updatedTitle, id) =>{
        setTodos(todos.map(todo => {
                if(todo.id ===id){
                    todo.title = updatedTitle;
                }
                return todo;
            })
        )
    }

    // useEffect(()=>{

    //     const temp = localStorage.getItem("todos")
    //     const loadedTodos = JSON.parse(temp)

    //     if(loadedTodos){
    //         setTodos(loadedTodos)
    //     }
    // },[]) You can use this either
    function getInitialTodos(){
        //getting stored items
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }

    useEffect(()=>{
     const temp = JSON.stringify(todos)
     localStorage.setItem("todos",temp)
    },[todos])


    return(
        <>
        <Header/>
        <Navbar/>
        <InputTodo addInputTodoProps = {addTodoItem}/>
        <TodosList todos = {todos}
        handleChangeProps ={handleChange}
        deleteTodoProps = {deleteTodo}
        setUpdate ={setUpdate}
        />
      <Switch>
        <Route exact path ="/"/>
        <Route path="/about" component={About}/>
        <Route path ="*" component={NotMatch}/>
     </Switch> 
     </> 
    );
}

export default TodoContainer;