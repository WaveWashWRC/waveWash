const vendorModel = require("../../database/VendorModel");

const getVendorsByService = async (req, res) => {
  try {
    const { service } = req.params;
    console.log("Searching for service:", service);

    const vendors = await vendorModel.find({
      "services.category": service,
    });

    console.log("Found vendors:", vendors);

    res.status(200).json({ vendors });
  } catch (error) {
    console.error("Error fetching vendors by service:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getVendorsByService,
};
