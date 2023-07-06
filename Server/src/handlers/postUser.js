const { User } = require("../DB_connection.js");

async function postUser(req, res) {
  try {
    const { email, password } = req.body;
    if (email && password) {
      let user = await User.findOrCreate({
        where: { email, password },
        defaults: { email, password },
      });
      return res.status(200).json(user)
    }
    return res.status(400).send("Faltan datos");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = postUser;
