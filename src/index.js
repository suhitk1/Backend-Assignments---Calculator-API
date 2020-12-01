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
app.post('/add',function(req,res){
    //res.send(req.query);
    const a = Number(req.query.num1);
    const b = Number(req.query.num2);
    if(a==='NaN'|| b==='NaN'){
        res.send({status: "error",
        message: "Invalid data types"});
    }
    if(a<-1000000|| b<-1000000){
        res.send({status: "failure",
        message: "Underflow"});
    }
    if(a>1000000|| b>1000000){
        res.send({status: "failure",
        message: "Overflow"});
    }
    res.send({
        status: "success",
        message: "the sum of given two numbers",
        sum: `${a+b}`
        });
});


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;