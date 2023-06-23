const url = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = async (req, res) => {

  try {
    const { id } = req.params;
    let response = await axios.get(url + id); //peticion a la api
    let data = response.data;
    
    if (data) {
      let personaje = {
        id: id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin?.name,
        image: data.image,
        status: data.status,
      };
      res.status(200).json(personaje);
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getCharById };

/* 
VERSION VIEJA
const getCharById = function(res, id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => { // puedo destructurar {data} del response que me llega
      let data = response.data; // Acceder directamente a response.data
      //Axios ya devuelve los datos en formato JSON automáticamente, por lo que no es necesario llamar a response.json()
      let personaje = {
        id: id,
        name: data.name,
        gender: data.gender,
        species: data.species, 
        origin: data.origin?.name,
        image: data.image,
        status: data.status,
      };
      return personaje;
    })
    .then((response) => {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify(response)); //no hace falta el return
    })
    .catch((error) => {
      res.writeHead(500, { 'content-type': 'text/plain' });
      res.end(error.message);//no hace falta el return
    });
};

module.exports = getCharById; */
