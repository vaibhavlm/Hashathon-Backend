const express = require('express');
const Mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const trackRouter = require('./routes/track.routes');
const router = require('./routes/evaluator.routes');
// const product = require('./routes/client.routes');

Mongoose.connect("mongodb+srv://hashathon:1234@cluster0.fjlb6.mongodb.net/hashathondb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('mongoose is connected')).catch(err => console.log(err))

const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'))

app.use("/track",trackRouter);
app.use("/evaluator",router)

const port =  process.env.PORT || 9080 ;
app.listen(port, ()=> console.log(`Application is active on port ${port}`));
