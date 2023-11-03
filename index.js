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
              "post travelsdetails":"/api/products/insertdata",
              "post destination name":"/api/products/demo",
              "post delete data":"/api/products/deletedata",
              "hosted database link":"https://www.phpmyadmin.co/tbl_structure.php?db=sql12658991&table=traveldetails",
              "password":"1hdFd6yTM5",
              "server":"sql12.freesqldatabase.com",
              "username":"sql12658991"});
})

app.use("/api/products",products_routes);   

app.listen(port,(req,res)=>{
    console.log(`${port} server is connected`)
})

