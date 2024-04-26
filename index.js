const express = require("express");
const app=express();
let port=8080;

app.set("view engine","ejs");

app.get("/ig/:username" , (req,res) =>{
    let { username }=req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs" , { data });
    }else{
        res.render("error.ejs");
    }
});

app.listen(port,()=>{
    console.log(`app is listening ${port}`);
})
