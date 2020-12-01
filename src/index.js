const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.get('/',function(req,res){
    res.send("Hello World!");
});
app.post("/add",(req,res)=>{
    const sumObj = {
        status : "",
        message : "",
        sum : 0
    };
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    if(isNaN(num1)||isNaN(num2)){
        sumObj.status = "error";
        sumObj.message = "Invalid data types";
    }else{
        if(num1<-1000000|| num2<-1000000|| (num1+num2)<-1000000){
            sumObj.status = "error";
            sumObj.message = "Underflow";
        }
        else if(num1>1000000|| num2>1000000 || (num1+num2)>1000000){
            sumObj.status = "error";
            sumObj.message = "Overflow";
        }else{
            sumObj.status = "success";
            sumObj.message = "the sum of given two numbers";
            sumObj.sum = num1 + num2;
        }
            
    }
        res.send(sumObj);
        });
app.post("/sub",(req,res)=>{
    const a = Number(req.query.num1);
    const b = Number(req.query.num2);
    if(a==='NaN'|| b==='NaN'){
        res.send({status: "error",
        message: "Invalid data types"});
    }
    if(a<-1000000|| b<-1000000 || (a-b)<-1000000){
        res.send({status: "error",
        message: "Underflow"});
    }
    if(a>1000000|| b>1000000 || (a-b)>1000000){
        res.send({status: "error",
        message: "Overflow"});
    }
    res.send({
        status: "success",
        message: "the difference of given two numbers",
        difference: `${a-b}`
        });
});
app.post("/multiply",(req,res)=>{
    const a = Number(req.query.num1);
    const b = Number(req.query.num2);
    if(a==='NaN'|| b==='NaN'){
        res.send({status: "error",
        message: "Invalid data types"});
    }
    if(a<-1000000|| b<-1000000||(a*b)<-1000000){
        res.send({status: "error",
        message: "Underflow"});
    }
    if(a>1000000|| b>1000000 || (a*b)>1000000){
        res.send({status: "error",
        message: "Overflow"});
    }
    res.send({
        status: "success",
        message: "The product of given numbers",
        result: `${a*b}`
        });
});
app.post("/divide",(req,res)=>{
    const a = Number(req.query.num1);
    const b = Number(req.query.num2);
    if(a==='NaN'|| b==='NaN'){
        res.send({status: "error",
        message: "Invalid data types"});
    }
    if(b===0){
        res.send({status: "error",
        message: "Cannot divide by zero"});
    }
    if(a<-1000000|| b<-1000000|| (a/b)<-1000000){
        res.send({status: "error",
        message: "Underflow"});
    }
    if(a>1000000|| b>1000000 || (a/b)>1000000){
        res.send({status: "error",
        message: "Overflow"});
    }
    res.send({
        status: "success",
        message: "The division of given numbers",
        result: `${a/b}`
        });
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;