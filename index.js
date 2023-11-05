const express = require("express");
const app = express();
const router = require('./Router');
const cors = require("cors");
app.get("/",(req,res)=>{
    res.send('')
})

app.use('/api',cors({origin: '*'}),router)
app.get("*",(req,res)=>{
    res.send("nhap sai duong dan")
})
app.listen(5000,()=>{

})