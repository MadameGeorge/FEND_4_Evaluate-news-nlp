const express = require('express');
const app = express();
const port = 8080;

// Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

// Initiate server
app.use(express.static('dist'));

const server = app.listen(port, () => {
    console.log('Success. The server is running on localhost:', port);
});

// Get route
app.get('/get', getFunction);
function getFunction(request, response) {
    console.log(request);
    response.send(database);
};

const database = {
    test: 'this is a test'
};
