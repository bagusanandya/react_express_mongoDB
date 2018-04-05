var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://bagus:12july1994@localhost:27017/toko';

MongoClient.connect(url,function(err,db){
    console.log("connected to mongoDB!");
    updateData(db,function(){
        db.close();
    });
});

const updateData = function(db,callback){
    const collection = db.collection('karyawan');
    collection.updateOne({nama:'Andi'},
    {$set:{kota:'Solo'}},(err,out) => {
        console.log("Data Sukses terupdate!");
        callback(out);
    });
}