import React from 'react';
// import axios from 'axios';
// import TodoCard from "./TodoCard";
import { Link } from "react-router-dom";

function TodoDetail(props) { 
    console.log(props)
    const {todo, description, priority} = props.location.state.todo
    
    
        return (
            <div className="main">
              <div className="ui card centered">
                  <div className="content">
                      <div className="header">{todo}</div>
                      <div className="description">{description}</div>
                      <div className="priority">{priority}</div>
                  </div>
              </div>
              <div className="center-div">
                  <Link to="/">
                    <button className="ui button red center">Back to List</button>
                  </Link>
              </div>
            </div>
            
    
  )
}
    


export default TodoDetail