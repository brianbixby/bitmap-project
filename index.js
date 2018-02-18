'use strict';

const readFileHelper = require('./lib/file-reader.js');
const transformFileHelper = require('./lib/file-transformer.js');
const writeFileHelper = require('./lib/file-writer.js');

let transformedFilePath = process.argv[3];
let transformation = process.argv[4];

const wfCallback = function(err, data) {
  if(err) throw err;
};

const tfCallback = function(err, data) {
  if(err) throw err;
  writeFileHelper(data, transformedFilePath, wfCallback);
};

const rfCallback = function(err, data) {
  if(err) throw err;
  transformFileHelper(data, transformation, tfCallback);
};

readFileHelper(process.argv[2], rfCallback);

// node index.js palette-bitmap.bmp transformed-palette-bitmap.bmp invert