import React,{useState,useEffect} from 'react';
import styles from './TodoItem.module.css';
import {FaTrash} from "react-icons/fa"

function TodoItem(props){
      const[editing,setEditing] = useState(false)

      const handleEditing = () => {
    	setEditing(true)
    	}

    const handleUpdateDone = event =>{
        if(event.which === 13){
        	setEditing(false)
        }
    	}

    	const completedStyle = {
    		fontStyle:"italic",
    		color:"#595959",
    		opacity:"0.4",
    		textDecoration:"line-through"
    	}

    	const {completed, id, title} = props.todo;
        
        let viewMode = {
        	cursor:"pointer"
        }
        let editMode = {}

        if(editing){
        	viewMode.display = "none"
        }
        else{
        	editMode.display = "none"
        }

        useEffect(()=>{
            return() => {
                console.log("Cleaning up....")
        }
        },[])
        
        return(
        <div>
        <li className={styles.item}>
        <input type="checkbox" className={styles.checkbox}
        checked={completed} 
        onChange = {()=>props.handleChangeProps(id)}/>
        <button onClick ={()=>props.deleteTodoProps(id)}>
         <FaTrash style = {{color:"red",fontSize:"16px"}}/>
        </button> 
        <span style={completed ? completedStyle : null}>
        {title}
        </span>
         </li>
         <li className={styles.item}>
         <div onDoubleClick={handleEditing} style={viewMode}>
         .....
         </div>
         <input type="text" 
         style={editMode} 
         className={styles.textInput}
         value={title}
         onChange = {event =>{
         props.setUpdate(event.target.value, id)
         }}
         onKeyDown = {handleUpdateDone}
         />
         </li>
         </div>
        );
}
export default TodoItem;