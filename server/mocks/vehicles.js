module.exports = function(app) {
  var express = require('express');
  var vehiclesRouter = express.Router();

  vehiclesRouter.get('/', function(req, res) {
    res.send({
      'vehicles': [
        {id: 0, licenseNumber: 'XX-11', type: 'car', status: 'outside'},
        {id: 1, licenseNumber: 'XX-12', type: 'car', status: 'inside'},
        {id: 2, licenseNumber: 'XX-13', type: 'car', status: 'outside'},
        {id: 3, licenseNumber: 'XX-14', type: 'car', status: 'outside'},
      ]
    });
  });

  vehiclesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  vehiclesRouter.get('/:id', function(req, res) {
    res.send({
      'vehicles': {
        id: req.params.id
      }
    });
  });

  vehiclesRouter.put('/:id', function(req, res) {
    res.send({
      'vehicles': {
        id: req.params.id
      }
    });
  });

  vehiclesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/vehicles', vehiclesRouter);
};
