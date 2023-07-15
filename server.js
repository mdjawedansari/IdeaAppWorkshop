const express = require('express');
const serverConfig = require('./config/server.config');

const app = express();


app.listen(serverConfig.PORT, ()=>{
    console.log(`server started on the port number ${serverConfig.PORT}` );
})