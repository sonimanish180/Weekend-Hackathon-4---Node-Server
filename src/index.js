var express = require("express");


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

app.listen(8081, () => console.log('Started Listening'));
