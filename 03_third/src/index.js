import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import connectDB from "./db/index.js"
import {app} from './app.js'



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 7000,()=>{
        console.log(`Server id Runnig at port:${process.env.PORT}`);
        
    })
})
.catch((error)=>{
    console.log("MongoDb connection failed!!",error)
})





// require('dotenv').config({path:'./env'})
// import mongoose from "mongoose"
// import {DB_NAME} from "./constants.js"
// import express from "express";
// const app = express();




































/*

import express from "express"
const app=express()

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERRR: ",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
    } catch(error){
        console.error("ERROR: ",error);
        
    }
})()

*/