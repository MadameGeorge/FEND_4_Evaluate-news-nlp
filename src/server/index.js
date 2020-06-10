// Express
const express = require('express');
const app = express();

// Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

// Initiate server
app.use(express.static('dist'));
const port = 8080;

const server = app.listen(port, () => {
    console.log('Success. The server is running on localhost:', port);
});

// Env
const dotenv = require('dotenv');
dotenv.config();

// Aylien
const AylienTextApi = require('aylien_textapi');

const textApi = new AylienTextApi({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});


// textapi.sentiment({
//     'text': 'John is a very good football player!'
//   }, function(error, response) {
//     if (error === null) {
//       console.log(response);
//     }
//   });

// Get route
app.get('/get', getFunction);
function getFunction(request, response) {
    console.log(request);
    response.send(database);
};

const database = {
    test: 'this is a test'
};
