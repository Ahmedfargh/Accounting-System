const UserController = require("../Controllers/UserController.js");
const HRController = require("../Controllers/HRController.js");
const router = {
  BuildRouting: function (app) {
    app.get("/", (req, res) => {
      res.send("testess");
    });
    app.get("/api/v1/create", UserController.create);
    app.get("/api/v1/signin", UserController.SignIn);
    app.get("/api/v1/count", HRController.CoutEmployee);
    app.get("/api/v1/count/user", UserController.CountUser);
    return app;
  },
};
module.exports = router;
