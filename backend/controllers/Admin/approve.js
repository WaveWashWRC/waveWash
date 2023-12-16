const vendor = require("../../database/VendorModel");
const admin = require("../../database/AdminModel");
const approveVendor = async (req, res) => {
  if (req.user.type !== "admin") res.sendStatus(403);
  try {
    const vendorId = req.params.vendorId;
    await vendor.updateOne(
      { _id: vendorId },
      {
        verified: true,
      }
    );
    res.json({ msg: "Approved successfully", success: true });
  } catch (err) {
    res.json({ msg: "error", err, success: false });
  }
};
const getVendors = async (req, res) => {
  try {
    const adminAcc = await admin.findOne({ _id: req.user.id });
    const verified = req.query.verified === "true" ? true : false;
    const verifiedAcc = await vendor.find({
      "location.city": adminAcc.region.city,
      verified,
    });
    res.json(verifiedAcc);
  } catch (error) {
    res.json({ msg: "Error !", error, success: false });
  }
};

module.exports = {
  approveVendor,
  getVendors,
};
