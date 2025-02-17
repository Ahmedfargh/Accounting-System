const { default: mongoose } = require("mongoose");
const ProductModel = require("../Database/Products.js");
const SupplierModel = require("../Database/suppliers.js");
const supplierModel = require("../Database/suppliers.js");
mongoose;
module.exports = {
  SaveProduct: function (req, res) {
    ProductModel.create(req.body.body)
      .then((results) => {
        res.status(200).json({
          results: results,
          message: "product_created",
        });
      })
      .catch((error) => {
        res.status(503).json({
          results: error,
          message: "error ",
        });
      });
  },
  getAll: async function (req, res) {
    ProductModel.find({})
      .then(async (results) => {
        for (const result in results) {
          results[result].suppliers = (await supplierModel
            .find({ _id: { $in: results[result].suppliers } }, "name -_id")).map(item=>item.name);
        }

        res.status(200).json(results);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  },
  getProduct:async function(req,res){
    console.log(req.body);
    let results=await ProductModel.findById(res.body);
    
  }
};
