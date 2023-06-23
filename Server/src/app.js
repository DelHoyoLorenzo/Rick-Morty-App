const express = require('express');
const {mainRouter} = require('./routes/index');
const cors = require('cors');
const morgan = require('morgan')
const server = express();

server.use(cors())

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

server.use(morgan('dev'));

server.use('/rickandmorty',mainRouter);

module.exports = server;