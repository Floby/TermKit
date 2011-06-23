#!/usr/bin/env node
var termkit = {
  version: 1,
};
require.paths.unshift(__dirname);
require.paths.unshift(__dirname+'/../Shared');

// Load requirements.
var http = require('http'),  
    io = require('socket.io')
    router = require("router"),
    connect = require('connect');

// Load config file.
var config = require('config').getConfig();

// Set up http server.
var server = connect.createServer(
    connect.static(__dirname+'/../HTML')
)

server.listen(2222, function() {
    console.log('server listening at http://localhost:2222');
});

// Set up WebSocket and handlers.
var socket = io.listen(server); 
socket.on('connection', function (client) {
  var p = new router.router(client);
});
