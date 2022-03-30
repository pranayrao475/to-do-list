const express = require('express'); 
const { v4: uuidv4} = require("uuid");
uuidv4();


const app = express();
const port = 8000;

// Middleware for parsing application/json
app.use(express.json()); 
const cors = require('cors')
app.use(cors())

//database
let todoList = [
    {
        todo: "Working on Assessment",
        description: "Completed assignment for code review",
        priority: "high",        
        _id: uuidv4(),
    },
    {
        todo: "Working on Frontend part",
        description: "Complete React part",
        priority: "high",        
        _id: uuidv4(),
    },
    {
        todo: "Working on MongoDB",
        description: "Complete codealongs on engage",
        priority: "low",        
        _id: uuidv4()
    },
    {
        todo: "Working on Frontend part",
        description: "Complete React part",
        priority: "high",        
        _id: uuidv4(),
    },
    {
        todo: "Working on MongoDB",
        description: "Complete codealongs on engage",
        priority: "low",        
        _id: uuidv4()
    }
]

//Routes
app.get("/todolist", (req,res) => {

    if(todoList) {
        res.status(200).json(todoList);
    } else {
        res.status(404).json("Something went wrong")
    }
});

//post request
app.post("/todo",  (req, res) => {
    console.log(req.body);     
      const todos = req.body;

     if(todoList.push({...todos, _id: uuidv4()})) {
        res.status(200).json(todos)
     } else {
        res.status(404).json("Something wrong to create todo")
     }
})

//route to get one todo by id
app.get("/todo/:id", (req,res) => {
    const { id } = req.params;
    //1,2,3
    todoList = todoList.filter(item => item._id === id );
    if(todoList) {
        res.status(200).json(todoList)
    } else {
        res.status(404).json("Something wrong to get by id")
    }
})

//route for put (update existing data)
app.put("/updatetodo/:id", (req,res) => {
    console.log(req.params, req.body)
    let id = req.params.id;
    let todo = req.body.todo;
    let description = req.body.description;
    let priority = req.body.priority;
    // let requestBody = req.body;
    let index = todoList.findIndex((item) => {
        return (item._id === id)
    })
    if(index>=0) {
        
        let updatedTodo = todoList[index]
        updatedTodo.todo = todo;
        updatedTodo.description = description;
        updatedTodo.priority = priority;
        console.log(updatedTodo)
        console.log(res, "if true")
        res.status(200).json(updatedTodo);

    } else {
        console.log(res, "if not true")

        res.status(404).json("Something went wrong to update by ID")
    }
})

//route to delete one data by id
app.delete("/todo/:id", (req,res) => {
    const { id } = req.params;
    todoList = todoList.filter(item => item._id !== id);
    if(todoList) {
        res.status(200).json(`Deleted ${id}`)
    } else {
        res.status(404).json("Something went wrong to delete data by ID")
    }
})

//query parameter
app.get('/todo/:priority', (req, res) => {
    const requestedCategory = req.params.priority;
    const result = [];
  
    for (let i = 0; i < todoList.length; i++) {
      const currentTermCategory = todoList[i].priority;
      if (requestedCategory === currentTermCategory) {
        result.push(todoList[i]);
      }
    }
    return res.status(200).json(result);
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);

module.exports =app;