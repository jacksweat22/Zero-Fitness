const express = require('express');
const cors =  require('cors');
const mongoose = require('mongoose');

require('dotevn').config();
const app = express();
const port = proccess.env.PORT || 3000;

const exercisesRouter = require('./routes/exercises');
const usersRouter =require('./routes/users');

app.use (cors());
app.use (express.json());
app.use('/exercises', exercisesRouter)
app.use('/users',  usersRouter)

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}
    );
const connection = mongoose.connection;
connection.once('open',  ()=> {
    console.log("mongoBD established")
})

app.listen(port, () =>  {
    console.log(`server is running on port ${port}`)
})