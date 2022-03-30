import React, {useState, useEffect} from 'react';
import axios from 'axios';
//import TodoCard from "./TodoCard";
import { Link } from "react-router-dom";
import styled from "styled-components"


function TodoList(props) {
  useEffect(() => {
    const getAllTodos = async () => {
      const allTodos = await getTodos();
      if(allTodos) setTodos(allTodos)
    };
    getAllTodos();
}, []);
const [todos, setTodos] = useState([]);
    
    const getTodos = async () => {
        const response = await axios.get('http://localhost:8000/todolist')
        // console.log(response)
            return response.data        
    }
    console.log(props)
    
    const renderTodoList = todos.map(todo => {
        return (
            <div className="item" key={todo._id}>
            <div className="content" >
                <Link to={{pathname:`/todo/${todo._id}`, state:{todo:todo}}}>
                    <div className="header">{todo.todo}</div>
                    <div>{todo.description}</div>
                    <div>{todo.priority}</div>
                </Link>
                <div>
                <Link to={{pathname: `/edit`, state:{ todo: todo}}}>
                  <Edit>Edit</Edit>
                </Link>
                  <Button onClick={()=>props.getTodoId(todo._id)}>Delete</Button>
                </div>
            </div>
            
            
        </div> 
        )
    })

  return (
      <div className="main">
          <h2>
              Todo List
              <Link to="/add">
                <button className="ui button blue right" style={{marginLeft:"600px"}}>Add Todo</button>
              </Link>
          </h2>
      <div className="ui celled list">
        {renderTodoList}
      </div>
      </div>
    
  )
    
}

export default TodoList

const Button= styled.div`
background-color: red;
  color: white;
  padding: 5px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  max-width:10%;
  opacity: 0.9;
`
const Edit= styled.div`
background-color: blue;
  color: white;
  padding: 5px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  max-width:10%;
  opacity: 0.9;
`