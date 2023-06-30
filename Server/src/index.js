const server = require('./app');
const {conn} = require('./DB_connection')
/* const express = require('express');
const {mainRouter} = require('./routes/index');
const cors = require('cors');
const morgan = require('morgan')
const server = express();
server.use(cors()) */
const PORT = 3001;




server.listen(PORT, () => {
   conn.sync({force: true})
   console.log('Server raised in port: ' + PORT);
});