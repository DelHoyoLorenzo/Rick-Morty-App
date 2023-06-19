const express = require('express');
const {mainRouter} = require('./routes/index');
const cors = require('cors');
const server = express();
const PORT = 3001;

server.use(cors())


server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use(express.json());

/* server.use((req,res,next)=>{
    req.url = "/rickandmorty" + req.url;
    next()
}) */
//agrega el prefijo "/rickandmorty" a todas las URLs entrantes

server.use('/rickandmorty',mainRouter);
// todas las rutas definidas en mainRouter estarán disponibles bajo el prefijo "/rickandmorty"