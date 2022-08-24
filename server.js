const express = require("express");

//initialisation
const app = express();
// application will now use json format for data
app.use(express.json());

const port = 7229;

const toDoList = ["Complete Node Byte", "Play Cricket"];

//  http://localhost:7229/todos // use this to open server
app.get("/todos", (req, res) => {
    //callback
    res.status(200).send(toDoList);
});

http://localhost:7229/todos
app.post("/todos", (res,req) => {
    let newToDoItem = req.body.item;
    toDoList.push(newToDoItem);
    res.status(201).send({
        message: "Task added successfully",
    }); 
});

app.listen(port, () => {
    //callback
    console.log(`Nodejs server started on port ${port}`);
});