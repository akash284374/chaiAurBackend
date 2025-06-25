require('dotenv').config()
const express=require('express')
const app=express()
const Port=4000;

app.get('/',(req,res)=>{
    res.send("Hello World!");
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login at Chai aur code</h1>');
})

app.listen(process.env.PORT,()=>{
    console.log(`App listening on port:${Port}`);
})
