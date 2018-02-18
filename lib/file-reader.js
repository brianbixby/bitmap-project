'use strict';

const fs = require('fs');

const readFileHelper = module.exports = (filePath, rfCallback) => {

  fs.readFile(`${__dirname}/../assets/${filePath}`, function(err, data) {
    if (err) return rfCallback(err);

    const bmDataArr = [{
      type: data.toString('utf-8', 0, 2),
      size: data.readInt32LE(2),
      width: data.readInt32LE(18),
      height: data.readInt32LE(22),
      offset: data.readInt32LE(10),
      buffer: data,
      colorTableBuffer: data.slice(54, 1078),
    }]; 

    return rfCallback(null, bmDataArr);
  });
};