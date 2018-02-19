'use strict';

const fs = require('fs');

const readFileHelper = module.exports = (filePath, rfCallback) => {

  fs.readFile(`${__dirname}/../assets/${filePath}`, function(err, data) {
    if(filePath.substr(filePath.length - 4) !== '.bmp') throw new Error(`${filePath} is not a bmp file. Please visit https://online-converting.com/image/convert2bmp/ to convert this image to a 8-bit bmp file.`);
    if (err) return rfCallback(err);

    // function BmData(obj) {
    //   this.type = obj.toString('utf-8', 0, 2);
    //   this.size = obj.readInt32LE(2);
    //   this.width = obj.readInt32LE(18);
    //   this.height = obj.readInt32LE(22);
    //   this.offset = obj.readInt32LE(10);
    //   this.dibHeaderSize = obj.readInt32LE(14);
    //   this.bitsPerPixel = obj.readInt32LE(28);
    //   this.imageSize = obj.readInt32LE(34);
    //   this.colorsincolorpalatter = obj.readInt32LE(46);
    //   this.buffer = obj;
    //   this.colorTableBuffer = obj.slice(this.dibHeaderSize + 14, this.offset);
    //   this.pixelArray = obj.slice(this.offset, this.size);
    // }

    // let bmData = new BmData(data);
    // return rfCallback(null, bmData);

    return rfCallback(null, data);
  });
};

// 'palette-bitmap.png is not a bmp file. Please visit https://online-converting.com/image/convert2bmp/ to convert this image to a 8-bit bmp file.'

// 'Could not find notfound.bmp in assets folder. Please make sure it is there, check for typos and try again.'