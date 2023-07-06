const { Favorite } = require("../DB_connection");

async function postFav(req, res) {
    
    try {
      const { id, name, origin, status, image, species, gender } = req.body;
    if (id && name && origin && status && image && species && gender) {
      await Favorite.findOrCreate({
        where: {
            id: id,
            name: name,
            origin: origin,
            status: status,
            image: image,
            species: species,
            gender: gender,
          }
      });
      let favorites = await Favorite.findAll();
     return res.status(200).json(favorites);
    }
    return res.status(401).send("Faltan datos");

  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = postFav;
