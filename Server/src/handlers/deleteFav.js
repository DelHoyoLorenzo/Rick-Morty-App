const { Favorite } = require("../DB_connection");

async function deleteFav(req, res) {
  try {
    const { id } = req.params;
    await Favorite.destroy({
      where: { id: id },
    });
    let response = await Favorite.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

module.exports = deleteFav;
