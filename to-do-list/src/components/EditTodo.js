import React from 'react';
//import { Link } from "react-router-dom";
import axios from 'axios';


class EditTodo extends React.Component {
    constructor(props) {
        super(props);
        const {_id, todo, description, priority} = props.location.state.todo;
        this.state = {
            _id,
            todo,
            description,
            priority,
        }
    }
    
    
    update = e => {
        e.preventDefault();
        if(this.state.todo === "" || this.state.description === "" || this.state.priority ==="") {
            alert("All the fields are mandatory");
            return
        }
        //console.log(this.state)
         axios.put(`http://localhost:8000/updatetodo/${this.state._id}`, this.state)
         .then(resp => {
             console.log(resp)
             this.props.history.push("/")
         })
        
        this.setState({todo:"", description:"", priority:""})
        // console.log(this.state)
        
    }
    render() {
  return (
    <div className="ui main">
        <h2 className="ui centre">Edit Todo</h2>
        <form className="ui form" onSubmit={e => this.update(e)}>
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
                {/* <Link to="/"> */}
                  <button type="submit" className="ui button blue"  >Update Todo</button>
                {/* </Link> */}
            </div>
        </form>
    </div>
  )
    }
}

export default EditTodo