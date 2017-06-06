const http = require('http');
const request = require('request');

const server = http.createServer(function (req, rep) {
    console.log(req.url);
    request({
        'url': `http://download.oracle.com${req.url}`,
        'headers' : {
            'Cookie': 'oraclelicense=accept-securebackup-cookie'
        }
    }).pipe(rep);
});
server.listen(3000);