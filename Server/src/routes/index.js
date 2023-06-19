const express = require('express');
const { Router } = express;

const {getCharById} = require('../controllers/getChar.js');
const {loginHandler} = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');

const mainRouter = Router();

mainRouter.get('/character/:id', getCharById);

mainRouter.get('/login',loginHandler);

mainRouter.post('/fav',postFav);

mainRouter.delete('/fav/:id',deleteFav);

module.exports = {mainRouter};