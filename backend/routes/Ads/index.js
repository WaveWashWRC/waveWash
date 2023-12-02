const express = require("express");

const router = express.Router();

const authenticate = require("../../middleware/authenticate");

const { createAd, updateAd, deleteAd, getAllAds,getAdById } = require("../../controllers/Ads/CRUDAd");

router.post("/create", authenticate, createAd);
router.get("/get/all",getAllAds);
router.get("/get/:id",getAdById);



router.put("/update/:id",authenticate, updateAd);

router.delete("/delete/:id", authenticate, deleteAd);

module.exports = router;
