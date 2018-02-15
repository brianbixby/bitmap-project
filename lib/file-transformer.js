'use strict';

const fs = require('fs');
module.exports = exports = {};

const transformFileHelper = module.exports = (filePath, callback) => {

  fs.readFile(filePath, function(err, data) {
    if (err) return callback(err);
    console.log('my data as a buffer: ', data.toString('hex'));
    console.log('my data as a buffer: ', data.toString());
    callback(null, data.toString('hex'));
  });
};