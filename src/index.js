var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if (req.url === '/welcome'){
        res.write('Welcome to Dominos!');
        res.end();
    }
    else if (req.url === '/contact') {
        const contact =  {
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }
        res.status(200).write(JSON.parse(contact));
        res.end();
    } else {
        res.status(404);
        res.end();
    }
}

module.exports = httpServer;
httpServer.listen(8081);