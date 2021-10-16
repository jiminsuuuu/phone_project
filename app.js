const express = require("express");
const morgan = require("morgan");
const globalRouter = require("./routers/globalRouter");
const path = require("path");

const app = express();
const PORT = 4000;

app.set("view engine", "pug");
app.use(morgan(`dev`));

app.use("/assets", express.static(path.join(__dirname,"/assets")));

app.listen(PORT, ()=>{
    console.log("SERVER START");
});