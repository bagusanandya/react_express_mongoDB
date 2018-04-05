const express = require('express');
const app = express();

var MongoClient=require('mongodb').MongoClient;
var url = 'mongodb://bagus:12july1994@localhost:27017/toko';

MongoClient.connect(url,function(err,db){console.log("Terhubung ke MongoDB");
});

app.listen(3210,()=>{
    console.log('Server aktif di port 3210')
})