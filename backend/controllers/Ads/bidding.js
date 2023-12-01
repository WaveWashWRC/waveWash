const ads = require('../../database/AdModal');
const bid = async (req, res) => {
    try {
        const vendorId = req.user.id;
        const { cost } = req.body;
        const adId = req.params.ad;
        await ads.updateOne({
            _id: adId
        }, {
            $push: {
                bidders: { vendor: vendorId, cost }
            }
        });
        res.json({
            msg: 'Bid request sent succesfully',
            success: true
        })
    }
    catch (err) {

    }

}