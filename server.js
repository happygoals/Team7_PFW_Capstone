//back end for node
const app = require("./backend/app")
const debug = require("debug")("node-angular")
const http = require("http")

//makes sure the port number is valid
const normalizePort = val => {
  var port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

//error segment so that if program gets error it will close well
const onError = error => {
  if (error.syscall !== "listen") {
    throw error
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges")
      process.exit(1)
      break
    case "EADDRINUSE":
      console.error(bind + " is already in use")
      process.exit(1)
      break
    default:
      throw error
  }
}

const onListening = () => {
  const addr = server.address()
  const bind = typeof port === "string" ? "pipe " + port : "port " + port
  debug("Listening on " + bind)
}

const port = normalizePort(process.env.PORT || "3000")
app.set("port", port)

const server = http.createServer(app)
server.on("error", onError)//when server starts will start with this
server.on("listening", onListening)
server.listen(port)//starts the server
