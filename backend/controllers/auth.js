var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
router.use(bodyParser.json())
var connection = require('../connection')
var session = require('express-session')

//Register
router.post('/register', function(req, res)  {
  let Firstname = req.body.Firstname
  let Lastname = req.body.Lastname
  let Email = req.body.Email
  let Password = req.body.Password
  let EmployeeID = req.body.EmployeeID

  let checkingquery = "SELECT * FROM test.login WHERE EmployeeID= '" + EmployeeID + "'"

  connection.query(checkingquery, (err, result) => {
    if (err) {
      return res.status(500).send(err)
    }
    if (result.length > 0) {

      let stmt ="UPDATE test.login set Firstname ='"+Firstname+"', Lastname ='"+Lastname+"', Email = '"+Email+"', Password = '"+Password+"' WHERE (EmployeeID = '" + EmployeeID + "')"
         let todo = ["Insert", false]
         connection.query(stmt,todo, (err,results,fields) => {
           if(err) {
             return console.error(err.message)
           }
           console.log ('todo id:' + results.insertid)
         })
  }})
})

//update
router.post('/update', (req, res) => {
  let Email = req.body.Email
  let Firstname = req.body.Firstname
  let Lastname = req.body.Lastname

  let Password = req.body.Password


  let checkingquery = "SELECT * FROM test.login WHERE Email= '" + Email + "'"

      connection.query(checkingquery, (err, result) => {
        if (err) {
          //return res.status(500).send(err)
          console.log("first error")
        }
        if (result.length > 0) {
          console.log("got to length")
         let stmt ="UPDATE test.login set Firstname ='"+Firstname+"', Lastname ='"+Lastname+"', Password = '"+Password+"' WHERE (Email = '" + Email + "')"
         let todo = ["Insert", false]
         connection.query(stmt,todo, function(error, results, fields) {
			if (results.length > 0) {
        console.log("conect")
			} else {
				res.send('Incorrect Username and/or Password!');
			}
			res.end();
		});
  }})
})

///auth/login
router.post('/login', (req, res) => {
  let Email = req.body.Email
  let Password = req.body.Password
  let checkingquery = "SELECT * FROM test.login WHERE Email= '" + req.body.Email + "' and Password = '"+ req.body.Password +"' "

	if (Email && Password) {
		connection.query(checkingquery, [Email, Password], function(error, results, fields) {
			if (results.length > 0) {
        console.log("conect")
			} else {
				res.send('Incorrect Username and/or Password!');
			}
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
})

module.exports = router
