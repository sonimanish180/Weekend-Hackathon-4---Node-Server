var express = require("express");

// const server = http.createServer(handleServer);

const app = express();
app.use(express.json());

app.get('/welcome', (req, res) => {    
    res.status(200).send('Welcome to Dominos!');
});

app.get('/contact', (req, res) => {    
    const contact =  {
        phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'
    }
    res.status(200).send(contact);
});

app.get('/:id', (req, res) => {   
    const id = req.params.id;
    if (id !== "welcome" && id !== "contact") {
        res.status(404).send("404");        
    } 
});

console.log("listen");
app.listen(8081, () => console.log('Started Listening'));



// function handleServer(req, res) {
//     if (req.url === '/welcome'){
//         res.write('Welcome to Dominos!');
//         res.end();
//     }
//     else if (req.url === '/contact') {
//         const contact =  {
//             phone: '18602100000',
//             email: 'guestcaredominos@jublfood.com'
//         }
//         res.status(200).write(JSON.stringify(contact));
//     } else {
//         res.status(404);
//         res.end();
//     }
// }

// module.exports = httpServer;
// console.log("Listening...");
// httpServer.listen(8081);