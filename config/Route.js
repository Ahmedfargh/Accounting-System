const UserController = require("../Controllers/UserController.js");
const HRController = require("../Controllers/HRController.js");
const supplierConroller = require("../Controllers/SuppliersController.js");
const authenticator=require("../middleware/is_authenticated.js");
const router = {
  BuildRouting: function (app) {
    app.get("/", (req, res) => {
      res.send("testess");
    });
    app.get("/api/v1/create", UserController.create);
    app.get("/api/v1/signin", UserController.SignIn);
    app.get("/api/v1/count",authenticator.authenticatedJWTForGet, HRController.CoutEmployee);
    app.get("/api/v1/count/user",authenticator.authenticatedJWTForGet, UserController.CountUser);
    app.get("/api/v1/get/all/suppleirs",authenticator.authenticatedJWTForGet,supplierConroller.getAllSuppliers);
    return app;
  },
};
module.exports = router;
