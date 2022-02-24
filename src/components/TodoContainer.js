import React from 'react';
import Header from './Header'
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import {v4 as uuidv4} from 'uuid';


class TodoContainer extends React.Component{
    state = {
        todos:[],
    }

   handleChange = id =>{
        this.setState(previouState => ({
            todos: previouState.todos.map(todo => {
                if(todo.id === id){
                    return{
                        ...todo,
                       completed: !todo.completed,
                    }
                }
                return todo;
            })
        }));
    }

    deleteTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => todo.id !== id)
            ]
        })
    }

    addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos:[...this.state.todos, newTodo]
        })
    }

    setUpdate = (updatedTitle, id) =>{
        this.setState({
            todos: this.state.todos.map(todo =>{
                if(todo.id ===id){
                    todo.title = updatedTitle;
                }
                return todo;
            })
        })
    }

componentDidUpdate(prevProps,prevState){
    if(prevState.todos !== this.state.todos){
        const temp = JSON.stringify(this.state.todos)
        localStorage.setItem("todos",temp)
    }
}

componentDidMount(){
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
    if(loadedTodos){
        this.setState({
            todos: loadedTodos
        })
    }
}
componentWillUnmount(){
    console.log("Cleaning Up.....")
}
render(){
    return(
        <div className="container">
           <div className="inner">
            <Header/>
            <InputTodo addInputTodoProps ={this.addTodoItem}/>
           <TodosList todos ={this.state.todos} 
           handleChangeProps ={this.handleChange}
           deleteTodoProps = {this.deleteTodo}
           setUpdate ={this.setUpdate}
           />
           </div>
        </div>
    );
}
}
export default TodoContainer;