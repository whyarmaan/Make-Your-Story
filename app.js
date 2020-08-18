const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/apiroute");
const bodyParser = require("body-parser")

//* App Configurations!
app.use(bodyParser.urlencoded({extended: true}))

//* Database Configurations!
mongoose.connect('mongodb://localhost:27017/MakeYourStories', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {console.log("DataBase Sucessfully Connected!")})

//* Implementing Routes *!
app.use('/api/v1', router)

//* Getting On The Correct Port *!
let port;
if (process.env.PORT) {
  port = process.env.PORT;
} else {
  port = 3000;
}

app.listen(3000, () => {
  console.log(`Server Listening On Port: ${port}`);
});
