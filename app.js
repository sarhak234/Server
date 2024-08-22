const express=require('express')
const app=express();

app.post('/',(req,res)=>{
    res.send('my name is sarthak mehta')
})