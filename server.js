// initialize express
var express = require('express');
var app = express();
// create express peer server
var ExpressPeerServer = require('peer').ExpressPeerServer;

var options = {
    debug: true
}

const port = process.env.PORT || 3000;

// create a http server instance to listen to request
var server = require('http').createServer(app);

// peerjs is the path that the peerjs server will be connected to.
app.use('/peerjs', ExpressPeerServer(server, options));
// Now listen to your ip and port.

app.get('/', (req,res) => {
    res.send('Hello world');
});

app.get('/connect', (req,res) => {
        res.sendFile(path.join(__dirname + "/playground/client.html"));
});
server.listen(port);