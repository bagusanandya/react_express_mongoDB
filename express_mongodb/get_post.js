const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());

var bodyParser= require('body-parser');

var MongoClient=require('mongodb').MongoClient;
//var url = 'mongodb://bagus:12july1994@ds135619.mlab.com:35619/toko';
var url = 'mongodb://bagus:12july1994@localhost:27017/toko';
MongoClient.connect(url,function(err,db){console.log("Terhubung ke MongoDB");
});

app.use(bodyParser.json());
app.get('/data', (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
    var collection = db.collection('karyawan');
    collection.find({}).toArray((err, docs)=>{
    console.log(docs);
    res.send(docs);
    });});})
app.post('/data', (req,res)=>{
    MongoClient.connect(url, (err, db)=>{
    var data = {nama:req.body.nama, usia:req.body.usia};
    var collection = db.collection('karyawan');
    collection.insert(data, (err, result)=>{
    console.log(result);
    res.send({
        type:'POST',
        nama:req.body.nama,
        usia:req.body.usia
    }
    );
    });});})

app.listen(3210,()=>{
    console.log('Server aktif di port 3210')
})