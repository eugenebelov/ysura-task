module.exports = function(app) {
  var express = require('express');
  var levelRouter = express.Router();

  levelRouter.get('/', function(req, res) {
    res.send(
      {
        'levels': [{
          id: 1,
          name: "Level 1",
          places: ['0', '2', '3']
        }, {
          id: 2,
          name: "Level 2",
          places: ['1', '2', '3']
        }, {
          id: 3,
          name: "Level 3",
          places: ['1', '2', '3']
        }]
      }
    );
  });

  levelRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  levelRouter.get('/:id', function(req, res) {
    res.send({
      'level': {
        id: req.params.id
      }
    });
  });

  levelRouter.put('/:id', function(req, res) {
    res.send({
      'level': {
        id: req.params.id
      }
    });
  });

  levelRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/levels', levelRouter);
};
