const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoute = require('./routes/router');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const app = express();
dotenv.config();

const PORT = process.env.PORT;
const DB_URL = 'mongodb://user:user@ac-vnb30rw-shard-00-00.g6j7osv.mongodb.net:27017,ac-vnb30rw-shard-00-01.g6j7osv.mongodb.net:27017,ac-vnb30rw-shard-00-02.g6j7osv.mongodb.net:27017/node-crud?ssl=true&replicaSet=atlas-tu63wf-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log(`DB is connnected...`);
});

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', postRoute);

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
});