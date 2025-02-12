const user = require("../Database/User.js");
module.exports = {
  count: async function () {
    let counters = await user.countDocuments();
    return counters;
  },
};
