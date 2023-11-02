require('dotenv').config();
const express = require('express');
const port = process.env.PORT;
const authRouter = require('./routes/authRouter')
const app = express();
app.use(express.json());
app.use('/api',authRouter);
app.listen(port,()=>{
    console.log('Server is live at port '+port)
});