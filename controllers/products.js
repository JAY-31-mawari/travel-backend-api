let travel_id=1;
let traveldata;
let destname;
const mysql=require("mysql")
const con=mysql.createConnection({
    host:"sql12.freesqldatabase.com",
    user:"sql12658991",
    password:"1hdFd6yTM5",
    database:"sql12658991"
})

const getAllProductsTesting = async(req,res) => {
    res.status(200).json({msg:"Hey Jay Mawari,i am getAllProductsTesting"})
}

const getTravelDetails = async(req,res) => {
    con.query("SELECT * FROM traveldetails",(err,result)=>{
        if(err){
            console.log("ERROR TRAVELDETAILS TABLE")
            return;
        }
        res.send(result);
    })
}

const postTravelData = async(req,res) => {
    traveldata=req.body;
    const query="INSERT INTO traveldetails (id,destname,location,desttype,price,description) VALUES (?)";

    con.query("SELECT id FROM traveldetails WHERE id=(SELECT max(id) FROM traveldetails)",(err,result)=>{
        if(err)
        {
        console.log("ERROR TRAVEL ID");
        return;
        }
        else
        {
            if(result.length !== 0)
            {
            travel_id=result[0].id + 1
            }
            traveldata=[travel_id,...traveldata];

            con.query(query,[traveldata],(err)=>{
                if(err)
                {
                console.log("ERROR TRAVELDETAILS TABLE ");
                return;
                }

      })
    }
  })
}

const postTravelName = async(req,res) => {
    destname=req.body.destname.toUpperCase();
    const query="INSERT INTO travel (id,Destinationname) VALUES (?,?)";

    con.query("SELECT id FROM travel where id=(SELECT max(id) FROM travel)",(err,result)=>{
        if(err){
            console.log("ERROR ID");
            return
        }
        else{
            if(result.length !== 0)
            {
                travel_id=result[0].id + 1;
            }

            con.query(query,[travel_id,destname],(err)=>{
                if(err){
                    console.log("ERROR TRAVEL TABLE");
                    return;
                }
            })
        }
    })
}   

const postDeleteData = async(req,res) => {
    let id=req.body
    let query="DELETE FROM traveldetails WHERE id=(?)";
    con.query(query,[id],(err)=>{
        if(err){
            console.log("ERROR DELETING DATA");
            return;
        }
    })
}

module.exports = {getAllProductsTesting,getTravelDetails,postTravelData,postTravelName,postDeleteData};