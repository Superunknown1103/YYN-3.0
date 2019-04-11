const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_USERS_Q = 'SELECT * FROM Users';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Superman1103',
    database: 'yyn_db'
})

connection.connect(err => {
    if (err) {
        return err;
    }
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('type in / and the name of the table you would like to see in the URL.')
})

app.get('/users', (req, res) => {
    connection.query(SELECT_ALL_USERS_Q, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
});

app.listen(4000, () => {
    console.log('Server listening on port 4000.')
})