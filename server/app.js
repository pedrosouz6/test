const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("3333")
})

app.listen(3333);