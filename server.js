// Create express app
const express = require('express');
const app = express();
// Create cors package
const cors = require('cors');
app.use(cors());
// add body-parser to allow backend to access json data
const bodyParser = require('body-parser');
// Setup empty JS object to act as endpoint for all routes
projectData = {};
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Initialize the main project folder
app.use(express.static("website"));
// function to complete Post ./all and get route
app.post('/add', addInfo)
function addInfo(req, res) {
    projectData['temp'] = req.body.temp;
    projectData['date'] = req.body.date;
    projectData['content'] = req.body.content;
    res.send(projectData);
    res.end();
    
};
// Get data
app.get('/get', getInfo)
function getInfo(req, res) {
    res.send(projectData);
};
// port and localhost
const port = 4000;
const host = '127.0.0.1';
// test 
const test = () =>{
console.log(`server running at http://${host}:${port}/`)};
// run the server
app.listen(port ,test);