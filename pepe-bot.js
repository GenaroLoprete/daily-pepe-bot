const cron = require('node-cron');
const dotenv = require('dotenv');

dotenv.config();
console.log(new Date());
cron.schedule('0 8 * * *', () => {
    require('./functions/makeTweet').makeTweet();
});

/*For staying the bot alive, weird, but need to have the bot alive*/
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('pong');
    res.end();
}).listen(process.env.PORT || 8000);