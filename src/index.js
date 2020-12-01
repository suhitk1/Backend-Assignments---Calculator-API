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
    const subObj = {
        status : "",
        message : "",
        difference : 0
    };
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    if(isNaN(num1)||isNaN(num2)){
        subObj.status = "error";
        subObj.message = "Invalid data types";
    }else{
        if(num1<-1000000|| num2<-1000000|| (num1-num2)<-1000000){
            subObj.status = "error";
            subObj.message = "Underflow";
        }
        else if(num1>1000000|| num2>1000000 || (num1-num2)>1000000){
            subObj.status = "error";
            subObj.message = "Overflow";
        }else{
            subObj.status = "success";
            subObj.message = "the difference of given two numbers";
            subObj.difference = num1 - num2;
        }           
    }
        res.send(subObj);
        });
app.post("/multiply",(req,res)=>{
    const mulObj = {
        status : "",
        message : "",
        result : 0
    };
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    if(isNaN(num1)||isNaN(num2)){
        mulObj.status = "error";
        mulObj.message = "Invalid data types";
    }else{
        if(num1<-1000000|| num2<-1000000|| (num1*num2)<-1000000){
            mulObj.status = "error";
            mulObj.message = "Underflow";
        }
        else if(num1>1000000|| num2>1000000 || (num1*num2)>1000000){
            mulObj.status = "error";
            mulObj.message = "Overflow";
        }else{
            mulObj.status = "success";
            mulObj.message = "The product of given numbers";
            mulObj.result = num1 * num2;
        }           
    }
        res.send(mulObj);
        });
app.post("/divide",(req,res)=>{
    const divObj = {
        status : "",
        message : "",
        result : 0
    };
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    if(isNaN(num1)||isNaN(num2)){
        divObj.status = "error";
        divObj.message = "Invalid data types";
    }
    else if(num2===0){
        divObj.status = "error";
        divObj.message = "Cannot divide by zero";
    }
    else{
        if(num1<-1000000|| num2<-1000000|| (num1/num2)<-1000000){
            divObj.status = "error";
            divObj.message = "Underflow";
        }
        else if(num1>1000000|| num2>1000000 || (num1/num2)>1000000){
            divObj.status = "error";
            divObj.message = "Overflow";
        }else{
            divObj.status = "success";
            divObj.message = "The division of given numbers";
            divObj.result = num1 / num2;
        }           
    }
        res.send(divObj);
        });

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;