import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component{
      state = {
      	editing:false,
      }

       handleEditing = () => {
    	this.setState({
    		editing:true,
    	})
    	}

    	handleUpdateDone = event =>{
        if(event.which === 13){
        	this.setState({
        		editing:false
        	})
        }
    	}

    componentWillUnmount(){
    alert("Do you want to delete this")
         }

    render(){

    	const completedStyle = {
    		fontStyle:"italic",
    		color:"#595959",
    		opacity:"0.4",
    		textDecoration:"line-through"
    	}

    	const {completed, id, title} = this.props.todo;
        
        let viewMode = {
        	cursor:"pointer"
        }
        let editMode = {}

        if(this.state.editing){
        	viewMode.display = "none"
        }
        else{
        	editMode.display = "none"
        }
        
        return(
        <div>
        <li className={styles.item}>
        <input type="checkbox" className={styles.checkbox}
        checked={completed} 
        onChange = {()=>this.props.handleChangeProps(id)}/>
        <button onClick ={()=>this.props.deleteTodoProps(id)}>
         Delete
        </button> 
        <span style={completed ? completedStyle : null}>
        {title}
        </span>
         </li>
         <li className={styles.item}>
         <div onDoubleClick={this.handleEditing} style={viewMode}>
         .....
         </div>
         <input type="text" 
         style={editMode} 
         className={styles.textInput}
         value={title}
         onChange = {event =>{
         	this.props.setUpdate(event.target.value, id)
         }}
         onKeyDown = {this.handleUpdateDone}
         />
         </li>
         </div>
        );
    }
}
export default TodoItem;