const express=require('express')
const port=4000;
const cors=require("cors")
const bodyParser=require("body-parser")
const path=require("path")
const app=express();
const products_routes=require("./routes/products")

app.use(cors());
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.send({"message":"SERVER STARTED AND SUCCESSFULLY CONNECTED WITH DATABASE",
              "get testing json":"/api/products/testing",
              "get travelsdetails":"/api/products/travelsdatabase",
              "post travelsdetails":"/api/products/insertdata",
              "post destination name":"/api/products/demo"});
})

app.use("/api/products",products_routes);   

app.listen(port,(req,res)=>{
    console.log(`${port} server is connected`)
})

