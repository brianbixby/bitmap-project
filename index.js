'use strict';

const EE = require('events');
const ee = new EE();

const readFileHelper = require('./lib/file-reader.js');
const transformFileHelper = require('./lib/file-transformer.js');
const writeFileHelper = require('./lib/file-writer.js');
const callback = require('./lib/callback.js');

ee.on('readFileHelperDone', function(data) {
  if(data) console.log('our data: ', data.toString());
  // if(files.length === 0) return;
  // // removes last from array
  // fs.readFile(files.pop(), function(err, data) {
  //   if (err) return console.error(err);
  //   ee.emit('filedone', data);
  // });
});

// `${__dirname}/../assets/palette-bitmap.bmp`

// console.log('works');
console.log(process.argv[2]);

readFileHelper(`${__dirname}/assets/${process.argv[3]}`);



// const bitmap = fs.readFileSync(`${__dirname}/assets/palette-bitmap.bmp`);

// node index.js original-file.bmp transformed-file.bmp transformation
// process.argv[3] = original-file.bmp
// process.argv[4] = transformed-file.bmp
// process.argv[5] = transformation