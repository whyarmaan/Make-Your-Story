const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/api/api.route");

if(process.env.NODE_ENV === 'dev'){
  require('dotenv').config();
}

//* App Configurations!
//Json data
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//* Database Configurations!
mongoose.connect('mongodb://localhost:27017/MakeYourStories', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {console.log("DataBase Sucessfully Connected!")})

//* Implementing Routes *!
app.use('/api/v1', router)

//* Getting On The Correct Port *!
const port = process.env.PORT || 3000;

//* L
app.listen(port, () => {
  console.log(`Server Listening On Port: ${port}`);
});
