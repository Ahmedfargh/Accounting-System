const supplierModel = require("../Database/suppliers.js");
const hashing = require("bcrypt");
const jwt = require("jsonwebtoken");
const userObserver = require("../observers/UsersObserver.js");
module.exports = {
  getAllSuppliers: function (req, res) {
    let suppliers = supplierModel
      .find({})
      .then((results) => {
        res.status(200).json(results);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          error: error,
        });
      });
  },
  searchByName: function (req, res) {
    let suppliers = supplierModel
      .find({
        name: new RegExp(req.query.name, "i"),
      })
      .then((results) => {
        res.status(200).json(results);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },
};
