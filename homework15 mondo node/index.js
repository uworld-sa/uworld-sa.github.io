// Import express
import express from 'express';
// Import Body parser
import { urlencoded, json } from 'body-parser';
// Import Mongoose
import { connect, connection } from 'mongoose';
// Initialize the app
let app = express();
// Import routes
import apiRoutes from "./api-routes";
// Configure bodyparser to handle post requests
app.use(urlencoded());
app.use(json());
// Connect to Mongoose and set connection variable
connect('mongodb://localhost/foods');
var db = connection;
// Setup server port
var port = process.env.PORT || 3000;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running on port " + port);
});