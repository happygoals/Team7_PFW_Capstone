var connection = require('../connection')


module.exports.getAllDataSet = function (callback) {
  return connection.query("SELECT * FROM test", callback)
}
module.exports.getBeaconsByDateTime = function (startDate, endDate, startTime, endTime) {
  return connection.query("SELECT beacon FROM test WHERE Date BETWEEN ? AND ?  AND Time BETWEEN ? AND ?", [startDate, endDate, startTime, endTime], (error, rows) => {
    if (!error)
      console.log(JSON.stringify(rows))
    else
      console.log("error")
  })
}
module.exports.getBeaconsById = function (ID, callback) {
  connection.query("SELECT beacon FROM test WHERE ID=?", [ID], callback)
}