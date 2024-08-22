const express=require('express')
const app=express();
const cors=require('cors')

app.use(cors())

app.post('/',(req,res)=>{
    res.send('my name is sarthak mehta')
})

app.listen(5000,()=>{
    console.log('app is running on port 5000')
})