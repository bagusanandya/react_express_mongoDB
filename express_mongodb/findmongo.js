var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://bagus:12july1994@localhost:27017/toko';

MongoClient.connect(url,function(err,db){
    console.log("connected to mongoDB!");
    findData(db,function(){
        db.close();
    });
});

var findData = function(db,callback){
    var collection = db.collection('karyawan');
    collection.find({nama:'Budi'}).toArray(function(err,docs){
        console.log("berikut data yang tersimpan :")
        console.log(docs);
        callback(docs);
    })
}