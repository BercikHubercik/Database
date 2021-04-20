const express = require('express');
const db = require('../dbApp/db');
const dbRouter = express.Router();

function router() {
dbRouter.route('/')
    .all((req, res) => {
      res.send('DB');
    });

  dbRouter.route('/add')
    .post((req, res) => {
      db.add(req.body.db_pk, req.body.db_type, req.body.db_id, req.body.db_obj);
      console.log(db.dbMap);
      res.send('Object added!');
    });

  dbRouter.route('/get')
    .get((req, res) => {
      const demanded_obj = db.get(req.query.db_pk, req.query.db_type, req.query.db_id);
      res.json(demanded_obj);
    });

  dbRouter.route('/list')
    .get((req, res) => {
      const demanded_list = db.list(req.query.db_pk, req.query.db_type);
      res.json(demanded_list);
    });
    return dbRouter;
};
  


module.exports = router;