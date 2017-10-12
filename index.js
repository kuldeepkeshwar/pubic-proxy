/**
 * Module dependencies.
 */

const http =require('http');
const app =require( './app');
const ngrok = require('ngrok');
const { argv } = require('yargs');
/**
 * Create HTTP server.
 */

const server = http.createServer(app)

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const p = parseInt(val, 10)

  if (isNaN(p)) {
    // named pipe
    return val
  }

  if (p >= 0) {
    // port number
    return p
  }

  return false
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(argv.port || '3000')
app.set('port', port)

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`
  console.info(`Listening on ${bind}`)
  ngrok.connect(port, function (err, url) {
    if(err){
      throw err
    }
    console.log(`public url: ${url}`);
  });
  
}
/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
    console.error(`${bind} requires elevated privileges`)
    process.exit(1)
    break
    case 'EADDRINUSE':
    console.error(`${bind} is already in use`)
    process.exit(1)
    break
    default:
      throw error
  }
}

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
