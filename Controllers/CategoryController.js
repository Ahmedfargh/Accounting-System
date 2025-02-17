const CategoryModel = require("../Database/categories.js");
module.exports = {
  All: function (req, res) {
    CategoryModel.find({})
      .then((results) => {
        res.status(200).json(results);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },
};
