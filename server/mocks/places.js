module.exports = function(app) {
  var express = require('express');
  var placesRouter = express.Router();

  placesRouter.get('/', function(req, res) {
    res.send({
      'parking-place': [
        {id: 0, number: 1, isFree: true, vehicle: '0'},
        {id: 1, number: 2, isFree: false, vehicle: '1'},
        {id: 2, number: 3, isFree: true, vehicle: '3'},
        {id: 3, number: 4, isFree: false, vehicle: '4'}
      ]
    });
  });

  placesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  placesRouter.get('/:id', function(req, res) {
    res.send({
      'places': {
        id: req.params.id
      }
    });
  });

  placesRouter.put('/:id', function(req, res) {
    res.send({
      'places': {
        id: req.params.id
      }
    });
  });

  placesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/parkingPlaces', placesRouter);
};
