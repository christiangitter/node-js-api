const express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//the port we are going to use
const port = 8000;

// the data array
const shirts = [
    { id: 1, name: 'Blue Shirt' },
    { id: 2, name: 'Red Shirt' },
    { id: 3, name: 'Green Shirt' },
    { id: 4, name: 'Black Shirt' }
];

app.get('/', (req, res) => {
    //here you get a bunch of information about the request
    //console.log(req);
    //res.send('Hello Chris!');

    //this is giving us all the shirts from the array above in json format
    res.json(shirts);
});
//parse a given id from the url
app.get('/shirt/:id', (req, res) => {
    res.json(shirts.find(shirt => shirt.id === parseInt(req.params.id)));
});

//post request
app.post('/shirts', (req, res) => {
    console.log(req.body);
    res.json({ message:'ok'});
});

//put request
app.put('/shirt/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.json({ message:`updating shirt with id ${req.params.id}`});
});

//delete request
app.delete('/shirt/:id', (req, res) => {
    console.log(req.params.id);
    res.json({ message:`deleted shirt with id ${req.params.id}`});
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

// CRUD = Create, Read, Update, Delete	
// REST = Post, Get, Put/Patch, Delete