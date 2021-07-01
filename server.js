const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const routes = require('./routes');

app.use(bodyParser.json())
app.use(methodOverride('_method'));

// This is so we don't get the blocked by CORS policy when trying to connect FrontEnd -------------

// const cors = require('cors');
// const corsOptions = {
//     origin: ['http://localhost:3000'],
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true, 
//     optionsSuccessStatus: 200
//   }
//   app.use(cors(corsOptions))


// I am getting an error for the above code so commenting out for now ----------------------------

app.use('/users', routes.users);

app.listen(3001, (req,res) => {
    console.log("We are up and Listening on Port Side!!");
})