const express = require("express");
const db = require("../db/index");
const router = express.Router();

router.get("/", (req,res)=>{
    res.render("screens/main");
});



module.exports = router;