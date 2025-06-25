require('dotenv').config()
const express=require('express')
const app=express()
const Port=4000;

const githubData={
    "message": "Not Found",
    "documentation_url": "https://docs.github.com/rest",
    "status": "404"
}

app.get('/',(req,res)=>{
    res.send("Hello World!");
})

app.get('/gitHub',(req,res)=>{
    res.json(githubData);
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login at Chai aur code</h1>');
})

app.listen(process.env.PORT,()=>{
    console.log(`App listening on port:${Port}`);
})
