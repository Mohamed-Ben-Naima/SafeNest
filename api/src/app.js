const express = require ('express');
const morgan = require('morgan');

const userRouter = require ('./routes/userRouter');

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

app.use('/api',userRouter)


app.use((error,req,res,next)=>{
    res.status(500).json({
        error:'500 Server Error',
        message:error.message
    })
})

module.exports=app;