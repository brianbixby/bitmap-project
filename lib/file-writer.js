'use strict';

const fs = require('fs');
module.exports = exports = {};

const writeFileHelper = module.exports = (fileWritePath, callback) => {

  fs.writeFile(`${__dirname}/data/new.txt`, data, function(err, data) {
    if (err) return callback(err);
    console.log('msg from write file: ', 'file created');
  });

  fs.readFile(filePath, function(err, data) {
    if (err) return callback(err);
    console.log('my data as a buffer: ', data.toString('hex'));
    console.log('my data as a buffer: ', data.toString());
    callback(null, data.toString('hex'));
  });
};

// fs.writeFile(`${__dirname}/data/new.txt`, data, function(err, data) {
//   console.log('msg from write file: ', 'file created');
// });