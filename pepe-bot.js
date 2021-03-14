const Twit = require('twit');
const pepes = require('rare-pepe-api');

var T = new Twit({
    consumer_key: '...',
    consumer_secret: '...',
    access_token: '...',
    access_token_secret: '...',
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
});







/*For staying the bot alive, weird, but need to have the bot alive*/
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('pong');
    res.end();
}).listen(process.env.PORT || 8000);