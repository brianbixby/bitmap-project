'use strict';

const fs = require('fs');
const EE = require('events');
const ee = new EE();

const readFileHelper = module.exports = (filePath, rfCallback) => {

  fs.readFile(`${__dirname}/../assets/${filePath}`, function(err, data) {
    if (err) return rfCallback(err);
    // console.log('my data as a buffer: ', data.toString('hex'));
    // rfCallback(null, data.toString('hex'));
    const bmDataObj = {
      type: data.toString('utf-8', 0, 2),
      size: data.readInt32LE(2),
      width: data.readInt32LE(18),
      height: data.readInt32LE(22),
      buffer: data.toString('hex'),
    };
    console.log(data);
    return rfCallback(null, bmDataObj);
  });
};