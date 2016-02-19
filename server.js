var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var server = PeerServer({
  port: 9000,
  path: '/peer',
  proxied: true
});

server.on('connection', function(id) {
  console.log('connection' + id);
});
server.on('disconnect', function(id) {
  console.log('disconnect' + id);
});
