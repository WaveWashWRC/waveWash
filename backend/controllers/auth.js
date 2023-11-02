const getStatus = (req,res)=>{
    res.json({
        msg : 'API is working'
    })
}

module.exports = {
    getStatus
}
