import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from 'axios';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoDetail from "./components/TodoDetail";
import EditTodo from "./components/EditTodo";
import styled from "styled-components"


function App() {
      
  const [todos, setTodos] = useState([]);

    //add 
    const addTodoHandler = (todo) => {
      console.log(todo);
      const request = {
        ...todo
      }
      const response = axios.post('http://localhost:8000/todo',request)
      console.log(response)
      setTodos([...todos, response.data])
    }

    //remove
    const removeTodoHandler = (_id) => {
      axios.delete(`http://localhost:8000/todo/${_id}`)
      
      setTodos(...todos)
    }
    return (
      <Container> 
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => (<TodoList {...props} getTodoId={removeTodoHandler}/>)}/> 
          <Route path="/add" exact render={(props) => (<AddTodo {...props} addTodoHandler={addTodoHandler} /> )}/>
          <Route path="/todo/:id" component={TodoDetail}/>   
          <Route path="/edit" exact render={(props) => (<EditTodo {...props} /> )}/>      
        </Switch>
      </Router>              
      </Container>    
  );
}

export default App;

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid red;
margin: 30px;
`