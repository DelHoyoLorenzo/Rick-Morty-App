const express = require('express');
const { Router } = express;

const {getCharById} = require('../controllers/getChar.js');
/* const {loginHandler} = require('../controllers/login');
const { postFav, deleteFav, resetFav } = require('../controllers/handleFavorites'); */

const login = require('../handlers/login.js')
const postUser = require('../handlers/postUser.js')
const postFav = require('../handlers/postFav.js')
const deleteFav = require('../handlers/deleteFav.js')


const mainRouter = Router();

mainRouter.get('/character/:id', getCharById);

mainRouter.get('/login', login);

mainRouter.post('/login', postUser);

mainRouter.post('/fav', postFav);

mainRouter.delete('/fav/:id', deleteFav);

/* mainRouter.get('/login', loginHandler);

mainRouter.delete('/login', resetFav);

mainRouter.post('/fav', postFav);

mainRouter.delete('/fav/:id', deleteFav); */

module.exports = {mainRouter};