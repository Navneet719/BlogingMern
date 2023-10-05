const express = require('express')

const mongoose = require('mongoose')
const route=require("./routes/user-routes")
const blogrouter = require('./routes/blog-routes')
const cors=require("cors")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/user",route)
app.use("/api/blog",blogrouter)






mongoose.connect('mongodb+srv://admin:YdrA0TT7K1pDZpV4@cluster0.gcmmkjm.mongodb.net/BlogApp?retryWrites=true&w=majority',{useNewUrlParser:true})
.then(()=>{
    console.log("MongoDB connected")
}).catch(err=>{
    console.log(err.message);
})





app.listen(5000, () => {
    console.log("Example app listening on port 5000")
  })