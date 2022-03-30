//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
const { v4: uuidv4} = require("uuid");
chai.should();

chai.use(chaiHttp);

describe('Tasks API', () => {
    describe('GET /todolist', () => {
        it('it should Get all the Todos', (done) => {
            chai.request(server)
            .get('/todoList')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array'); 
                res.body.length.should.be.eq(5);
                done();
            });
        });
        it('it should Not Get all the todos', (done) => {
            chai.request(server)
            .get('/i')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
        });
    });


    // get by id route
    describe('GET /todo/:id', () => {
        it('it should Get a todo by ID', (done) => {
            const todoId = uuidv4()
            chai.request(server)            
            .get('/todo/' + todoId)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array'); 
                done();
            });
        });

        it('it should Not Get a todo by ID', (done) => {
            const id = uuidv4()
            chai.request(server)            
            .get('/todo/')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
        });
   });

    //post route
    describe('POST /todo', () => {
        it('it should Post a new todo', (done) => {
            const todoList = {
                todo: "work",
                description: "has to work",
                priority: "high",                
            }
            chai.request(server)
            .post('/todo')
            .send(todoList)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object'); 
                res.body.should.have.property('todo');
                res.body.should.have.property('description');
                res.body.should.have.property('priority');  
                done();
            });
        });
  });

    //put
    // describe('PUT /updatetodo/:id', () => {
    //     it('it should update a todo item', (done) => {
    //         let todoItem = {
    //             id : uuidv4(),
    //             todo: "work1",
    //             description: "has to work",
    //             priority: "high",
    //         }
    //         chai.request(server)
    //         .put('/updatetodo/' + todoItem.id )
    //         .send(todoItem)
    //         .end((err, res) => {
    //             res.should.have.status(200);
    //             res.body.should.be.a('object'); 
    //             res.body.should.have.property('todo'); 
    //             res.body.should.have.property('description');
    //             res.body.should.have.property('priority');
    //             done();
    //         });
    //     });
    // });
    

    //delete
    describe('DELETE /todo/:id', () => {
        it('it should Delete a todo by Id', (done) => {
            const id = uuidv4()
            chai.request(server)
            .delete('/todo/' + id )
            .end((err, res) => {
                res.should.have.status(200);                
                done();
            });
        });

        it('it should not Delete a todo', (done) => {
            const id = uuidv4()
            chai.request(server)
            .delete('/todo/' )
            .end((err, res) => {
                res.should.have.status(404);                
                done();
            });
        });
 });


});