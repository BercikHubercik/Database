const express = require('express');
const app = express();
const db = require('./db');

app.post('/add', function (req, res) {
    db.add(req.db_pk, req.db_type, req.db_id, req.db_obj);
    console.log(db.DbMap)
    res.send('Object added!');
})

app.get('/get', function (req, res) {
    console.log(db.DbMap);
    const demanded_obj = db.get(req.db_pk, req.db_type, req.db_id);
    res.json(demanded_obj);

});

app.get('/list', function (req, res) {
    const demanded_list = db.get(req.db_pk, req.db_type);
    res.json(demanded_list);

});

app.get('/', function (req, res) {
    res.send('Welcome to my db');

});

app.listen(3000, function () {

});