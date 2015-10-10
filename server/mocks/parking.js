module.exports = function(app) {
  var express = require('express');
  var parkingRouter = express.Router();

  parkingRouter.get('/', function(req, res) {
    res.send({
      'parking': []
    });
  });

  parkingRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  parkingRouter.get('/:id', function(req, res) {
    res.send({
      'parking': {
        id: req.params.id
      }
    });
  });

  parkingRouter.put('/:id', function(req, res) {
    res.send({
      'parking': {
        id: req.params.id
      }
    });
  });

  parkingRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/parking', parkingRouter);
};
