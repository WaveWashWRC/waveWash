const userModel = require("../../database/UserModel");
const updateProfile = async (req, res) => {
    try {
        await userModel.updateOne({
            _id: req.user.id
        },
            req.body);
        res.json({ msg: 'Profile got updated', status: true, });
    }
    catch (error) {
        res.json({ msg: 'Something went wrong !',error, status: false })
    }
}
module.exports = {
    updateProfile
};