'use strict';

const fs = require('fs');
const EE = require('events');
const ee = new EE();

module.exports = exports = {};

const readFileHelper = module.exports = (filePath, callback) => {

  fs.readFile(`${__dirname}/../assets/${filePath}`, function(err, data) {
    if (err) return callback(err);
    // console.log('my data as a buffer: ', data.toString('hex'));
    // callback(null, data.toString('hex'));
    const bmDataObj = {
      type: data.toString('utf-8', 0, 2),
      size: data.readInt32LE(2),
      width: data.readInt32LE(18),
      height: data.readInt32LE(22),
    };
    console.log(bmDataObj);
    ee.emit('readFileHelperDone', bmDataObj);
  });
};



// readFileHelper([`${__dirname}/dont-exist.txt`], function(err) {
//   expect(err).toBeTruthy();
//   expect(err.code).toEqual('ENOENT');
//   done();
// });

// var expectedResult = [ '3120657367206577', '3220206577676577', '332066696c652061' ];

// readFileHelper(this.paths, function(err, data) {