const networking = require("./config/networking.js");
//const user=require("./Database/User.js");
const router = require("./config/Route.js");
const express = require("express");
const cors = require("cors");
let app = express();
const session = require('express-session');
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);
app.use(
  session({
    secret: "seco_seco_pass_session", // Replace with your own secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if you are using HTTPS
  })
);
app.use(express.json());
app = router.BuildRouting(app);
app.listen(3000, (error) => {
  if (!error) {
    console.log("connected succesfully");
  } else {
    console.log(error);
  }
});
