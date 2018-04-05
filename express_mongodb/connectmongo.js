var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://bagus:12july1994@localhost:27017/toko';

MongoClient.connect(url,function(err,db){
    console.log("connected to mongoDB!");
    inputData(db,function(){
        db.close();
    });
});

var inputData = function(db,callback){
    var collection = db.collection('karyawan');
    collection.insertMany(
        [{nama:'Budi',usia:29, kota :'Jakarta'},
        {nama:'Caca',usia:26, kota :'Medan'},
        {nama:'Dedi',usia:23, kota :'bandung'},
    ],
        function(err,result){
            console.log("data sukses tersimpan!");
            callback(result);
        });
}