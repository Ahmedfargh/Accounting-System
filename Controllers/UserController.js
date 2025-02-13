const userModel = require("../Database/User.js");
const hashing = require("bcrypt");
const jwt = require("jsonwebtoken");
const userObserver = require("../observers/UsersObserver.js");

const controller = {
  create: async function (req, res) {
    req.body["password"] = await hashing.hash(req.body["password"], 10);
    const data = new userModel(req.body);
    console.log(data);
    try {
      const savedData = await data.save();
      console.log(savedData);
      res.status(200).json(savedData);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  SignIn: async function (req, res) {
    const user = await userModel.findOne({ email: req.query["email"] });
    if (await hashing.compare(req.query["password"], user.password)) {
      const token = jwt.sign(
        { email: user["email"], name: user["name"] },
        user["password"],
        { expiresIn: "24h" }
      );
      req.session.jwt_token=token;
      res.status(200).json({
        user: user,
        loging_status: "_DONE_", //ahmed farghly thabet
        token: token,
      });
    } else {
      res.status(422).json({
        loging_status: "بيانات خاطئه",
      });
    }
  },
  CountUser: async function (req, res) {
    try {
      const count = await userObserver.count();
      res.status(200).json({
        message: "done",
        Value: count,
        lastRead: -1,
      });
    } catch (error) {
      console.log(error);
      res.status(503).json({
        message: error,
      });
    }
  },
};
module.exports = controller;
