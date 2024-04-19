var http = require('http'); // HTTP is a build in module in nodejs, to create a live server

var server = http.createServer((req, res) => {
    // requests are incoming values to node js
    // responce are outgoing values to node js
res.write("hello, world")
res.end();
});

server.listen(9000);
