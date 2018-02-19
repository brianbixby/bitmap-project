'use strict';

const fs = require('fs');

const readFileHelper = module.exports = (filePath, rfCallback) => {

  fs.readFile(`${__dirname}/../assets/${filePath}`, function(err, data) {
    if(filePath.substr(filePath.length - 4) !== '.bmp') throw new Error(`${filePath} is not a bmp file. Please visit https://online-converting.com/image/convert2bmp/ to convert this image to a 8-bit bmp file.`);
    if (err) return rfCallback(err);

    return rfCallback(null, data);
  });
};

// 'palette-bitmap.png is not a bmp file. Please visit https://online-converting.com/image/convert2bmp/ to convert this image to a 8-bit bmp file.'

// 'Could not find notfound.bmp in assets folder. Please make sure it is there, check for typos and try again.'