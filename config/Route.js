const UserController=require("../Controllers/UserController.js");

const router = {
  BuildRouting: function (app) {
    app.get("/", (req, res) => {
      res.send("testess");
    });
    app.get("/api/v1/create",UserController.create);
    app.get("/api/v1/signin",UserController.SignIn);
    return app;
  },
};
module.exports = router;
