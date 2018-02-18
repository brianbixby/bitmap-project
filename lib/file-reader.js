'use strict';

const fs = require('fs');

const readFileHelper = module.exports = (filePath, rfCallback) => {

  fs.readFile(`${__dirname}/../assets/${filePath}`, function(err, data) {
    if(filePath.substr(filePath.length - 4) !== '.bmp') throw new Error(`${filePath} is not a bmp file. Please visit https://online-converting.com/image/convert2bmp/ to convert this image to a 8-bit bmp file.`);
    if (err) return rfCallback(err);

    // console.log(data.slice(1078, 11078));

    const bmDataArr = [{
      type: data.toString('utf-8', 0, 2),
      size: data.readInt32LE(2),
      width: data.readInt32LE(18),
      height: data.readInt32LE(22),
      offset: data.readInt32LE(10),
      dibHeaderSize: data.readInt32LE(14),
      bitsPerPixel: data.readInt32LE(28),
      imageSize: data.readInt32LE(34),
      colorsincolorpalatter: data.readInt32LE(46),
      buffer: data,
      // colorTableBuffer: data.slice(54, 1078),
    }]; 

    return rfCallback(null, bmDataArr);
  });
};

// 'palette-bitmap.png is not a bmp file. Please visit https://online-converting.com/image/convert2bmp/ to convert this image to a 8-bit bmp file.'

// 'Could not find notfound.bmp in assets folder. Please make sure it is there, check for typos and try again.'