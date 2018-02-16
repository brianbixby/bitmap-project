'use strict';

const EE = require('events');
const ee = new EE();

const readFileHelper = require('./lib/file-reader.js');
const transformFileHelper = require('./lib/file-transformer.js');
const writeFileHelper = require('./lib/file-writer.js');

let transformedFilePath = process.argv[3];
let transformation = process.argv[4];

const wfCallback = function(err, data) {
  if(err) throw err;
  // console.log(data);
};

const tfCallback = function(err, data) {
  if(err) throw err;
  // console.log(data);
  writeFileHelper(data, transformedFilePath, wfCallback);
};

// transformFileHelper(data, frCallback);

const rfCallback = function(err, data) {
  if(err) throw err;
  // console.log(data);
  transformFileHelper(data, transformation, tfCallback);
};

readFileHelper(process.argv[2], rfCallback);



// var someCallback = function(data) {
//   console.log('got some data: ', data);
// }

// var useCallback = function(cb) {
//   cb('data that i want toget');
// }

// useCallback(someCallback);



// node index.js original-file.bmp transformed-file.bmp transformation
// process.argv[2] = original-file.bmp
// process.argv[3] = transformed-file.bmp
// process.argv[4] = transformation
// node index.js palette-bitmap.bmp

// node index.js palette-bitmap.bmp transformed-palette-bitmap.bmp invert