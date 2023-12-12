const ads = require("../../database/AdModel");
const bidRequest = async (req, res) => {
  try {
    const vendorId = req.user.id;
    if (req.user.type !== "vendor")
      return res.status(401).json({ msg: "user restricted", success: true });
    const { cost } = req.body;
    const ad1 = await ads.findById(req.params.id);
    if (ad1.booking.status == true)
      return res
        .status(401)
        .json({ msg: "Booking is already finished", success: false });
    const adId = req.params.id;
    const existingBidIndex = ad1.bidders.findIndex(
      (bid) => bid.vendor.toString() === vendorId
    );
    if (existingBidIndex !== -1) {
      // If the vendor has a bid, update the cost
      await ads.updateOne(
        { _id: adId, "bidders.vendor": vendorId },
        { $set: { "bidders.$.cost": cost } }
      );
    } else {
      await ads.updateOne(
        {
          _id: adId,
        },
        {
          $push: {
            bidders: {
              $each: [{ vendor: vendorId, cost }],
              //$slice: -1, // Limit the array size to keep only the latest element
            },
          },
        }
      );
    }
    res.json({
      msg: "Bid request sent succesfully",
      success: true,
    });
  } catch (err) {
    res.json(err);
    console.log(err);
  }
};

const acceptBidRequest = async (req, res) => {
  try {
    if (req.user.type !== "user")
      return res
        .status(403)
        .json({ msg: "restricted operation", success: false });
    await ads.updateOne(
      {
        _id: req.params.id,
      },
      {
        booking: {
          status: true,
          vendor: req.body.vendorId,
          cost: req.body.cost,
        },
      }
    );
    res.status(200).json({ msg: "Done!", success: true });
  } catch (err) {
    return res.status(400).json({ msg: "Error !", success: false });
  }
};
module.exports = {
  bidRequest,
  acceptBidRequest,
};
