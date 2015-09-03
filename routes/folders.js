var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  var name = req.body.name;
  var collection = req.orm.folders();
  //check if unique before or during insert
  collection.insertByName(name).then(function(response) {
    next();
  }, function(error) {
    console.log(error);
  });
});

router.all('/', function(req, res, next) {
  var collection = req.orm.folders();
  collection.find({}, {sort: {name: 1}}, function(err, folders) {
    if (!err) {
      res.json(folders);
    } else {
      console.log(error);
    }
  });
});

module.exports = router;
