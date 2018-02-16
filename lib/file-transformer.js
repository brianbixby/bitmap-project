'use strict';

// const fs = require('fs');
module.exports = exports = {};

const transformFileHelper = module.exports = (data, transformation, tfCallback) => {
  // console.log('successs!!!!!!!!!!!: ', data);
  // console.log('transformation: ', transformation);
  // if (err) return tfCallback(err);
  // let invert = data => {
  //   let rgb = data.colorTableBuffer;
  //   for(var i = 0; i < rgb.length; i++){
  //     rgb[i] = Math.floor(255 - rgb[i]);
  //   }
  //   return tfCallback(null, this);
  // };
   
  // this.colorTable = Buffer.from.toString('hex', 54, 1078);
  // this.colorTableBuffer = this.colorTable.slice(54, 1078);

  // let tdData = data;
  console.log(data.buffer);
  // let converted = data.buffer;
  // let tdData = new Buffer(converted);
  // console.log(tdData);
  return tfCallback(null, data.buffer);
};

// let invert = (tfDataInput, function(err, tfDataOutput)) {

// }
// fs.readFile(`${__dirname}/../assets/${filePath}`, function(err, data) {
//   if (err) return rfCallback(err);
//   // console.log('my data as a buffer: ', data.toString('hex'));
//   // rfCallback(null, data.toString('hex'));
//   const bmDataObj = {
//     type: data.toString('utf-8', 0, 2),
//     size: data.readInt32LE(2),
//     width: data.readInt32LE(18),
//     height: data.readInt32LE(22),
//     buffer: data.toString('hex'),
//   };
//   console.log(bmDataObj);
//   return rfCallback(null, bmDataObj);
// });