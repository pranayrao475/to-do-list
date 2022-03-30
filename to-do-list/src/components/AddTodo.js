import React from 'react';

class AddTodo extends React.Component {
    state = {
        todo:"",
        description:"",
        priority:"",
    }
    add =(e) => {
        e.preventDefault();
        if(this.state.todo === "" || this.state.description === "" || this.state.priority ==="") {
            alert("Please enter the data");
            return
        }
        this.props.addTodoHandler(this.state);
        this.setState({todo:"", description:"", priority:""})
        console.log(this.props)
        this.props.history.push("/");

    }
    render() {
  return (
    <div className="ui main">
        <h2 className="ui center" style={{textAlign:"center"}}>Todo List</h2>
        <form className="ui form" onSubmit={this.add}>
            <div className="field">
                <label>Todo</label>
                <input type="text" name="todo" placeholder="Todo" onChange={(e) => this.setState({todo: e.target.value})}
                      value={this.state.todo}/>
            </div>
            <div className="field">
                <label>Description</label>
                <input type="text" name="description" placeholder="Description" onChange={(e) => this.setState({description: e.target.value})}
                      value={this.state.description}/>
            </div>
            <div className="field">
                <label>Priority</label>
                <input type="text" name="priority" placeholder="Priority" onChange={(e) => this.setState({priority: e.target.value})}
                      value={this.state.priority}/>
            </div>
            <div>
                <button className="ui button blue">Add Todo</button>
            </div>
        </form>
    </div>
  )
    }
}

export default AddTodo