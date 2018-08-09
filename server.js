var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;

const port = process.env.PORT || 3000;

app.get('/', function(req, res, next) { res.send('Hello world!'); });

// =======

var server = app.listen(port);

var options = {
    debug: true
}

var peerserver = ExpressPeerServer(server, options);

app.use('/api', peerserver);

// == OR ==

var server = require('http').createServer(app);
var peerserver = ExpressPeerServer(server, options);

app.use('/peerjs', peerserver);

server.listen(port);