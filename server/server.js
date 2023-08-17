const path = require('path');
const express = require('express');
const cors = require('cors'); // <<<---- allows you to make fetch requests from the front-end
const mongoose = require('mongoose');
const axios = require('axios')
const cherrio = require('cheerio')
const app = express();
const PORT = 3010;

// HANDLE PARSER REQUEST BODIES //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // <<<---- allows you to make fetch requests from the front-end


// ROUTERS //
const todosRouter = require('./routes/todos')

// setup MongoDB //
mongoose.connect("mongodb+srv://nelsonmicahg777:admin@cluster0.ikv272a.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to DB"))
    .catch(console.error);


//DEFINE ROUTE HANDLERS (USE ROUTERS) //
app.use('/todos', todosRouter);





// HANDLE STATIC FILES //
app.use(express.static(path.resolve(__dirname, '../dist')));





// CATCH UNKOWN ROUTE REQUESTS //
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

//GLOBAL ERROR HANDLER


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

