const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 4000;

app.set("view engine", "pug");
app.use(morgan(`dev`));

app.listen(PORT, ()=>{
    console.log("SERVER START");
});