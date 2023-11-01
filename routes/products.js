const express=require("express");
const router=express.Router()

const {getAllProductsTesting,getTravelDetails,postTravelData,postTravelName,postDeleteData} = require("../controllers/products")

router.route("/testing").get(getAllProductsTesting);
router.route("/travelsdatabase").get(getTravelDetails);
router.route("/insertdata").post(postTravelData);
router.route("/demo").post(postTravelName);
router.route("/deletedata").post(postDeleteData);

module.exports = router