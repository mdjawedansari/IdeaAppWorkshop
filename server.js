const express = require('express');
const serverConfig = require('./config/server.config');
const mongoose = required('mongoose');
const dbConfig = required('./configs/db.config');

const app = express();

mongoose.connect("dbConfig.DB_URL");
const db = mongoose.connection ;

db.on("error", ()=>{
    console.log("Error while connecting to DB");
});

db.once("open", ()=>{
    console.log("DB is connected");
})



app.listen(serverConfig.PORT, ()=>{
    console.log(`server started on the port number ${serverConfig.PORT}` );
})