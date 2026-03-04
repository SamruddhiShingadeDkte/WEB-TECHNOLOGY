
let arr = [{id:1 ,name: "samruddhi" , department:"Developer"} ,
    {id:2 , name : "Mrunal" , department : "Tester"},
    { id : 3, name : "Amruta" , department : "Coder"},
    { id : 4, name : "Vaishnavi" , department : "designer"}
]

//import express
const express = require('express')

const app = express();
const port = 3000;

app.get('/users',(req,res)=>{
    res.json({
        message : "Users list ",
        data : arr
    })
})

app.listen(port,()=>{
    console.log("Port started at 3000");
})