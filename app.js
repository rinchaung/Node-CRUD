const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoute = require('./routes/router');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const app = express();
dotenv.config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log(`DB is connnected at ${DB_URL}`);
});

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', postRoute);

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
});