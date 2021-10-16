const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.render("screens/main");
});

module.exports = router;