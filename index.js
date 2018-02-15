'use strict';

const EE = require('events');
const ee = new EE();

const readFileHelper = require('./lib/file-reader.js');
const transformFileHelper = require('./lib/file-transformer.js');
const writeFileHelper = require('./lib/file-writer.js');
const callback = require('./lib/callback.js');

ee.on('readFileHelperDone', function(data) {
  if(data) console.log('our data: ', data);
  // if(files.length === 0) return;
  // // removes last from array
  // fs.readFile(files.pop(), function(err, data) {
  //   if (err) return console.error(err);
  //   ee.emit('filedone', data);
  // });
});

readFileHelper(process.argv[2], callback);

// node index.js original-file.bmp transformed-file.bmp transformation
// process.argv[2] = original-file.bmp
// process.argv[3] = transformed-file.bmp
// process.argv[4] = transformation

// node index.js palette-bitmap.bmp