import React,{useState} from "react";
import {FaPlusCircle} from 'react-icons/fa'

const InputTodo = props => {
    const[inputText,setInputText] = useState({
        title:"",
    })
    const onChange = e => {
        setInputText({
                ...inputText,
            [e.target.name]:e.target.value,
        })
    }
    const handeleSubmit = e => {
        e.preventDefault();
        if(inputText.title.trim()){
            props.addInputTodoProps(inputText.title)
            setInputText({
                title:""
            })
        }else{
            alert("Please write item")
        }
    }

    return(
        <>
        <form onSubmit = {handeleSubmit} className ="form-container">
          <input
           type="text"
           className="input-text"
           placeholder="Add todo..."
           value = {inputText.title}
           name = "title"
           onChange = {onChange}
          />
          <button className ="input-submit">
          <FaPlusCircle
          style={{color:"purple",fontSize:"25px",marginTop:"2px"}} 
          />
          </button>
        </form>
        </>
        );
}
export default InputTodo;
