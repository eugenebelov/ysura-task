module.exports = function(app) {
  var express = require('express');
  var parkingRouter = express.Router();

  parkingRouter.get('/', function(req, res) {
    res.send({
      parking: [
        { name: "Level 1",
          places: [
              {number: 1, isFree: true},
              {number: 2, isFree: true},
              {number: 3, isFree: true},
              {number: 4, isFree: true}
          ]
        },
        { name: "Level 2",
          places: [
              {number: 1, isFree: true},
              {number: 2, isFree: true},
              {number: 3, isFree: true},
              {number: 4, isFree: true}
          ]
        }
      ]
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
