var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var server = PeerServer({
  port: 9000,
  path: '/peer',
  proxied: true,
  ssl: {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
  }
});
