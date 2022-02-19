import React from 'react';

class InputTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:"",
        }
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        if(this.state.title.trim() !== ""){
            this.props.addInputTodoProps(this.state.title);
            this.setState({
                title:''
            });
        }else{
            alert("Please write item");
        }
        
    }
    render(){
        return(
            <form className="form-container" onSubmit={this.handleSubmit}>
                <input type="text" className="input-text" placeholder="Add Todo..." value={this.state.title}
                name="title" onChange = {this.onChange} />
                <button className="input-submit">Submit</button>
            </form>
        );
    }
}
export default InputTodo;