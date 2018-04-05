var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://bagus:12july1994@localhost:27017/toko';

MongoClient.connect(url,function(err,db){
    console.log("connected to mongoDB!");
    inputData(db,function(){
    findData(db,function(){
        db.close();
    });
});
});

var inputData = function(db,callback){
    var collection = db.collection('karyawan');
    collection.insertMany(
        [{nama:'Eko',usia:24, kota :'Medan'},
        {nama:'Fafa',usia:25, kota :'Jakarta'},
        {nama:'Galih',usia:27, kota :'bandung'},
    ],
        function(err,result){
            console.log("data sukses tersimpan!");
            callback(result);
        });
}

var findData = function(db,callback){
    var collection = db.collection('karyawan');
    collection.find({}).toArray(function(err,docs){
        console.log("berikut data yang tersimpan :")
        console.log(docs);
        callback(docs);
    })
}