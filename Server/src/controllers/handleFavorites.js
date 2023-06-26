let myFavorites = [];

function postFav(req, res) {
  try {
    myFavorites.unshift(req.body);

    return res.status(200).json(myFavorites);
  } catch (error) {

  }
}

function deleteFav(req, res) {
  try {
    const { id } = req.params;

    myFavorites = myFavorites.filter((favorite) => favorite.id !== id);

    return res.status(200).json(myFavorites);
  } catch (error) {
    
  }
}

function resetFav(req, res) {
    try {
        myFavorites = [];
        res.status(200).send('')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { postFav, deleteFav, resetFav };
