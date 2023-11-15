const express=require('express')
const port=process.env.PORT || 4000;
const cors=require("cors")
const bodyParser=require("body-parser")
const app=express();
const products_routes=require("./routes/products")

app.use(cors());
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.send({"message":"SERVER STARTED AND SUCCESSFULLY CONNECTED WITH DATABASE",
              "get testing json":"/api/products/testing",
              "get travelsdetails":"/api/products/travelsdatabase",
              "get history data":"/api/products/historydata",
              "get users name":"/api/products/users",
              "post delete users":"/api/products/deleteuser",
              "post travelsdetails":"/api/products/insertdata",
              "post login name":"/api/products/login",
              "post payment data":"/api/products/payment",
              "post delete data":"/api/products/deletedata",
              });
})

app.use("/api/products",products_routes);   

app.listen(port,(req,res)=>{
    console.log(`${port} server is connected`)
})

