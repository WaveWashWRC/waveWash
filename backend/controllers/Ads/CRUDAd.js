const ads = require('../../database/AdModal');
const createAd = async (req,res)=>{
    const customerId = req.user.id;
    const {desc, location, services,expiresAt} = req.body;
    try{
        const newAd = new ads({
            customerId,desc,location,services,expiresAt
        });
        const savedAd = await newAd.save();
        res.status(201).json({
            msg : 'Ad created',
            success:true,
            AdId : savedAd._id
        })    
    }
    catch(error){
      console.log(error)
        res.status(500).json({
            msg:'Error',
            success:false,
            error
        })
    }
}
const getAllAds = async (req,res)=>{
    const allAds = await ads.find();
    res.json(allAds)

};
const getFilteredAds = async (req,res)=>{
    
}
const updateAd = async (req,res)=>{
    const _id = req.params.id;
    const customerId = req.user.id;
    const {desc, location, services} = req.body;
    try{
        await ads.updateOne({
            $and:[
                {customerId},
                {_id}
            ]
        },
            {desc, location, services}
        );
        res.status(200).json({
            msg : 'Ad updated',
            success:true
        })    
    }
    catch(error){
        res.status(500).json({
            msg:'Error',
            success:false,
            error
        })
    }
}
const deleteAd = async (req,res)=>{
    const vendorId = req.user.id;
    const {_id} = req.body;
    try{
        await ads.deleteOne({_id,vendorId})
        res.status(200).json({
            msg : 'Ad removed',
            success:true
        })    
    }
    catch(error){
        res.status(500).json({
            msg:'Error',
            success:false,
            error
        })
    }
};

module.exports = {
    createAd,
    updateAd,
    deleteAd,
    getAllAds
}

//profile completion
//history of jobs
//current booking appointment 
//admin superadmin - login page and dashboard
