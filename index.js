var express = require('express');
var dotenv = require('dotenv');
var bodyParser = require('body-parser')


var path=process.env.NODE_ENV=="local"?".env":process.env.NODE_ENV=="dev"?'.env.dev':process.env.NODE_ENV=="prod"?".env.prod":"env"
dotenv.config({path,})
var app = express()


console.log(process.env.MONGO_URI)
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send({connection:"success",environment:process.env.MONGO_URI})
})





app.listen(process.env.PORT,()=>{
    console.log(`server is runnint at`,process.env.PORT)
})