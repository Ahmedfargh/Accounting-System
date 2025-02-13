module.exports = {
  authenticatedJWTForGet: function (req, res, next) {
    const token = req.header.token;
    token == req.session.jwt_token
      ? next()
      : res.status(422).json({
          message: "unautherized",
        });
  },
};
