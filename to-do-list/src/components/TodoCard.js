
import React from 'react'
import styled from "styled-components"
function TodoCard(props) {
    const { _id, todo, description, priority} = props.todo;
  return (
    <div>
        <div className="item" key={_id}>
            <div className="content" >
                <div className="header">{todo}</div>
                <div>{description}</div>
                <div>{priority}</div>
            </div>
            <Button onClick={()=>props.clickHandler(_id)}></Button>
    </div>
    </div>
  )
}

export default TodoCard

const Button= styled.div`
background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
`