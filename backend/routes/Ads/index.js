const express = require("express");

const router = express.Router();

const authenticate = require("../../middleware/authenticate");

const { createAd, updateAd, deleteAd, getAllAds } = require("../../controllers/Ads/CRUDAd");

router.post("/create", authenticate, createAd);

router.get("/get/all",getAllAds);

router.put("/update/:id",authenticate, updateAd);

router.delete("/delete/:id", authenticate, deleteAd);

module.exports = router;
