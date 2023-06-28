const users = require("../utils/user");

function loginHandler(req, res) {
  try {
    const { email, password } = req.query;

    let user = users.find((user) => {
      if (user.email === email && user.password === password) {
        return user;
      }
    });

    if (user) {
      res.status(200).json({ access: true });
    } else {
      res.status(400).json({ access: false });
    }
  } catch (error) {}
}

module.exports = { loginHandler };
