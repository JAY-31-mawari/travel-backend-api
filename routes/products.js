const express=require("express");
const router=express.Router()

const {getAllProductsTesting,getTravelDetails,getHistoryData,postTravelData,postDeleteData,postLoginData,postPaymentData} = require("../controllers/products")

router.route("/testing").get(getAllProductsTesting);
router.route("/travelsdatabase").get(getTravelDetails);
router.route("/historydata").post(getHistoryData);
router.route("/insertdata").post(postTravelData);
router.route("/deletedata").post(postDeleteData);
router.route("/login").post(postLoginData);
router.route("/payment").post(postPaymentData);

module.exports = router