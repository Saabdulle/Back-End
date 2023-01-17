const express = require("express"); // Access to the Express library
const cors = require("cors") // access to the cors library

const {goats, nextId} = require("./goats")
const app = express(); //Make a very basic server using Express.
//Tell the app what kind of request to listen for and how to handle them.


//Middleware
//req(uest) -> [middleware] -> [endpoint A, endpoint B]->res(ponse)
//req -> [cors]-> [API] -> res

app.use(cors())

//Endpoint
//req = request || res = respond

// app.get("/", (req, res) => {
//     res.send("Hell0, World!");
// })
app.get("/", (req, res) => {
    res.json({
        "message": "Welcome to the GOAT API!"
    })
});

app.get("/goats", (req, res) => {
    //Extract query params
    const { maxAge } = req.query

    if (maxAge){
        res.json(goats.filter(g => g["age"] <= maxAge))
    }else {
        res.json(goats)
    }

})

app.get("/goats/:id", (req, res) => {
    
    const id = req.params["id"]
    //Filter the goat list for the relevant goat
    console.log(req.params["id"])
    const goat = goats.filter(g => g["id"] == id)[0];
//Everything in URL come in string and "==" is better to use then "===".
if (goat){
    res.json(goat)
}else {
    //Send a status code and the .json send the error message like writen below.
    res.status(404).json({
        error: "Goat does not exist"
    })
}
})


module.exports = app;
// Make the server available to other files
