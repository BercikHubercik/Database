const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/add', function (req, res) {
    db.add(req.body.db_pk, req.body?.db_type, req.body.db_id, req.body.db_obj);
    console.log(db.DbMap);
    res.send('Object added!');
});

app.get('/get', function (req, res) {
    const demanded_obj = db.get(req.query.db_pk, req.query.db_type, req.query.db_id);
    res.json(demanded_obj);

});

app.get('/list', function (req, res) {
    const demanded_list = db.list(req.query.db_pk, req.query.db_type);
    res.json(demanded_list);

});

app.get('/', function (req, res) {
    res.send('Welcome to my db');

});

setTimeout(function(){
    console.log('timout_test');
}, 2000);




app.listen(3000, function () {

});