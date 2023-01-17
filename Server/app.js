const express = require("express"); // Access to the Express library

const app = express(); //Make a very basic server using Express.

//Tell the app what kind of request to listen for land how to hand them.

//req = request || res = respond

app.get("/", (req, res) => {
    res.send("Hello, World!");
})

module.exports = app //Make the server available to other files
