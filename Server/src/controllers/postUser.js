const { User } = require("../DB_connection");

module.exports = async function postUser(req, res) {
  try {
    const { email, password } = req.body;
    if (email && password) {
        User.findOrCreate(req.body)
    }
    res.status(400).send("Faltan datos")
  } catch (error) {
    res.status(500).send(error.message)
  }
};
