//back end - express should connect to the database or server here.
const express = require('express')
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const connection = request('express-myconnection')
const mysql = require('mysql')

app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.use(
  connection(mysql,{
    host: 'localhost',
    user: 'root',
    password : '123456789',
    port : 3306, //port mysql
    database:'sampledata'
  },'pool')
)

app.use(app.router)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'))
})

module.exports = app
