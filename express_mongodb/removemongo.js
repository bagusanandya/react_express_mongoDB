var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://bagus:12july1994@localhost:27017/toko';

MongoClient.connect(url,function(err,db){
    console.log("connected to mongoDB!");
    removeData(db,function(){
        db.close();
    });
});

const removeData = function(db,callback){
    const collection = db.collection('karyawan');
    collection.deleteOne({nama:'Budi',usia:26},
    (err,out) => {
        console.log("Data Sukses dihapus!");
        callback(out);
    });
}