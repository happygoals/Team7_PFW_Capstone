var connection = require('./connection')

var beacon = {
    getAllDataSet:function(callback){
        return connection.query("SELECT * FROM test", callback)
    },
    getBeacons
}