const networking = require("./config/networking.js");
//const user=require("./Database/User.js");
const router = require("./config/Route.js");
const express = require("express");
const cors = require("cors");
let app = express();
app.use("*",
  cors({
    origin: "http://localhost:8080",
    optionsSuccessStatus: 200,
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
