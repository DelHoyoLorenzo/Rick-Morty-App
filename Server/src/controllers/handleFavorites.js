let myFavorites = [];

function postFav(req, res){
    //req.body es el personaje, es un objeto
    myFavorites.push(req.body)

    return  res.status(200).json(myFavorites)
    
}

function deleteFav(req,res){
    const { id } = req.params;

    myFavorites = myFavorites.filter((favorite)=> favorite.id !== id)
  
    return res.status(200).json(myFavorites)
}

module.exports = {postFav, deleteFav}