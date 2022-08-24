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
app.post("/todos", (req,res) => {
    let newToDoItem = req.body.item;
    toDoList.push(newToDoItem);
    res.status(201).send({
        message: "Task added successfully"
    }); 
});

app.delete("/todos", (req, res) => {
    //callback
    const itemToDelete = req.body.item;

    toDoList.find((element, index) => {
        if (element === itemToDelete) {
            toDoList.splice(index, 1);
        }
    });

    res.status(202).send({
        message: `Deleted item "${req.body.item}"`
    })
});

app.listen(port, () => {
    //callback
    console.log(`Nodejs server started on port ${port}`);
});