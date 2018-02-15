'use strict';

const fs = require('fs');
module.exports = exports = {};

const readFileHelper = module.exports = (filePath, callback) => {

  fs.readFile(filePath, function(err, data) {
    if (err) return callback(err);
    console.log('my data as a buffer: ', data.toString('hex'));
    console.log('my data as a buffer: ', data.toString());
    callback(null, data.toString('hex'));
  });
};

// readFileHelper([`${__dirname}/dont-exist.txt`], function(err) {
//   expect(err).toBeTruthy();
//   expect(err.code).toEqual('ENOENT');
//   done();
// });

// var expectedResult = [ '3120657367206577', '3220206577676577', '332066696c652061' ];

// readFileHelper(this.paths, function(err, data) {