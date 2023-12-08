const express = require("express");

const router = express.Router();

const authenticate = require("../../middleware/authenticate");

const { createAd, updateAd, deleteAd, getAllAds,getAdById } = require("../../controllers/Ads/CRUDAd");
const { bidRequest } = require("../../controllers/Ads/bidding");

router.post("/create", authenticate, createAd);
router.get("/get/all",getAllAds);
router.get("/get/:id",getAdById);
router.put("/update/:id",authenticate, updateAd);
router.delete("/delete/:id", authenticate, deleteAd);
router.put("/bid/create/:id",authenticate,bidRequest) //vendor route
router.put("/bid/accept/:id",authenticate,bidRequest) //user route

module.exports = router;
