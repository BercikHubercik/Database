const express = require('express');
const app = express();
const db = require('D:\\Users\\huber\\WebstormProjects\\untitled1\\node_modules\\db.js');

app.post('/add', function (req, res) {
    db.add(req.body.db_pk, req.body.db_type, req.body.db_id, req.body.db_obj);
    res.send('Object added!');
})

app.get('/get', function (req, res) {
    const demanded_obj = db.get(req.body.db_pk, req.body.db_type, req.body.db_id);
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