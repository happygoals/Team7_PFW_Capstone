var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
//router.use(bodyParser.json())
var connection = require('../connection')
var session = require('express-session')


router.use(session({
  secret:'secret',
  resave: true,
  saveUninitialized: true
}))
router.use(bodyParser.urlencoded({extended : true}))
router.use(bodyParser.json(__dirname + '/src/app/authentication/login/login.component.html'))

router.get('/', function(request, response){
  response.sendFile(path.join())
})

router.post('/register', (req, res) => {
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
      let addquery = "INSERT INTO `test.login` (Firstname, Lastname, Email, Password) VALUES ('" +
      Firstname + "', '" + Lastname + "', '" + Email + "', '" + Password+ "')";
      connection.query(addquery, (err, result) => {
      if (err) {
          return res.status(500).send(err);
      }
      //res.redirect('/');
      console.log("created")
    })
  }})
})




router.post('/auth/:Email/:Password', function(req, response) {
/*
  var Email = request.body.Email;
  var Password = request.body.Password;
*/
  var Email = req.params.Email
  var Password = req.params.Password

	if (Email && Password) {
		connection.query('SELECT * FROM test.login WHERE Email = ? AND Password = ?', [Email, Password], function(error, results, fields) {
			if (results.length > 0) {
				//request.session.loggedin = true;
        //request.session.Email = Email;
        response.redirect('/population');
        return true;
			} else {
				response.send('Incorrect Email and/or Password!');
        return false;
      }
			response.end();
		})
	} else {
		response.send('Please enter Email and Password!');
		response.end();
	}
});

module.exports = router
