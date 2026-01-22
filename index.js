require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
  res.send("hii")
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login first</h1>')
})

app.get('/signup',(req,res)=>{
    res.send("<h2>Signup Page</h2>")
})

app.listen(process.env.PORT,()=>{
    console.log(`app is running on ${port}`)
})