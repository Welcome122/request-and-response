const express=require("express")
const app=express()

app.get("/home",(req,res)=>{
    res.send("welcome home")
})

app.get("/about",(req,res)=>{
    res.send("welcome to About Us page")
})

app.get("/node",(req,res)=>{
    res.send("welcome to my Node js Project")
})


app.listen(8000,()=>console.log("server is running"))
