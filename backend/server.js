require('dotenv').config();
const {mongoConnect} = require('./database/connect')

const express = require('express');

const port = process.env.PORT || 3300;

const authRouter = require('./routes/authRouter')

const app = express();

app.use(express.json());

app.use('/api/auth/', authRouter);

app.listen(port, () => {
    console.log('Server is live at port ' + port)
});