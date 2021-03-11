const express = require('express');
const app = express();
const db = require('./db.js');

app.post('/add', function (req, res) {
    db.add(req.db_pk, req.db_type, req.db_id, req.db_obj);
    res.send('Object added!');
})

app.get('/get', function (req, res) {

    const demanded_obj = db.get(req.db_pk, req.body.db_type, req.body.db_id);
    res.json(demanded_obj);

});

app.get('/list', function (req, res) {
    const demanded_list = db.get(req.body.db_pk, req.body.db_type);
    res.json(demanded_list);

});

app.get('/', function (req, res) {
    res.send('Welcome to my db');

});

app.listen(3000, function () {

});