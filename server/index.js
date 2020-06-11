const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./routes')
const app = express()

mongoose.connect('mongodb://localhost/User', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Mongoose')) 

/*
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Anuj@123',
    database: 'first',
    insecureAuth : true
});

con.connect(function(error){
    if(error) console.error(error);
    else console.log('Connected to MySql');
})
*/
app.use(bodyParser.json())
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
        })
);
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router);

app.listen(5000, () => console.log('Server is running at port 5000'))
