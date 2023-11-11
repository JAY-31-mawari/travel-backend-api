const fs=require('fs');

const getAllProductsTesting = async(req,res) => {
    res.status(200).json({msg:"Hey Jay Mawari,i am getAllProductsTesting"})
}

const getTravelDetails = async(req,res) => {
    const data=fs.readFileSync('./travels.json','utf8');
    const jsondata=JSON.parse(data);
    res.send(jsondata);
}

const getHistoryData = async(req,res) => {
    let paymentdata=fs.readFileSync('./payment.json','utf-8');
    paymentdata=JSON.parse(paymentdata);
    let historydata=[];
    for(let i=0 ; i < paymentdata.length ; i++)
    {
        if(paymentdata[i].name === req.body.username)
        {
            historydata=[...historydata,paymentdata[i]]
        }
    }
    res.send(historydata);
}

const postTravelData = async(req,res) => {
    let jsondata=[]
    let data=fs.readFileSync('./travels.json','utf-8')
    jsondata=JSON.parse(data);
    let jsonlength=jsondata.length
    req.body={"id":jsondata[jsonlength-1].id+1,...req.body}
    let newdata=[...jsondata,req.body]
    newdata=JSON.stringify(newdata)
    fs.writeFileSync('./travels.json',newdata);
    res.send({message:"DATA ADDED SUCCESSFULLY"})
}


const postDeleteData = async(req,res) => {
    let id=Number(req.body)
    let jsondata=[]
    let data=fs.readFileSync('./travels.json','utf-8')
    jsondata=JSON.parse(data)
    let newdata=jsondata.filter((obj)=> obj.id !== id)
    newdata=JSON.stringify(newdata);
    fs.writeFileSync('./travels.json',newdata);
    res.send({message:"DATA DELETED SUCCESSFULLY"})
}

const postLoginData = async(req,res) => {
    let jsondata=[]
    const data=fs.readFileSync('./login.json','utf-8')
    jsondata=JSON.parse(data);
    if(req.body.islogin)
    {
        const confirmuser=jsondata.some(user=>user.username === req.body.username);
        if(confirmuser)
        {
            res.send({message:"SUCCESSFULLY LOGGED IN"});
        }
        else
        {
            res.send({message:"INVALID USERNAME. FIRST SIGN UP PLEASE"})
        }
    }
    else
    {
        let newdata=[...jsondata,req.body];
        newdata=JSON.stringify(newdata);
        fs.writeFileSync('./login.json',newdata);
        res.send({message:"ACCOUNT CREATED SUCCESSFULLY"})
    }
}

const postPaymentData = async(req,res) => {
    let jsondata=[]
    let data=fs.readFileSync('./payment.json','utf-8')
    jsondata=JSON.parse(data);
    let newdata=[...jsondata,req.body]
    newdata=JSON.stringify(newdata);
    fs.writeFileSync('./payment.json',newdata);
    res.send({message:"PAYMENT SUCCESSFULLY DONE"})
}

module.exports = {getAllProductsTesting,getTravelDetails,getHistoryData,postTravelData,postDeleteData,postLoginData,postPaymentData};