'use strict';

const fileTransformer = require('../lib/file-transformer.js');
const fileReader = require('../lib/file-reader.js');
require('jest');

const rfCallback = function(err, data) {
  if(err) return err;
  return data;
};

const tfCallback = function(err, data) {
  if(err) return err;
  return data;
};

let bmArrayData = fileReader('palette-bitmap.bmp', rfCallback);

fileTransformer(bmArrayData, ['greyscale'], tfCallback);



describe('File Transformer Module', function() {
  describe('with improper file path or file type', function() {
    it('should return an error', function(done) {
      fileTransformer('palette-bitmap.png', function(err, data) {
        expect(err).toBeTruthy();
        expect(err.code).toEqual('ENOENT');
        // expect(err).toEqual('palette-bitmap.png is not a bmp file. Please visit https://online-converting.com/image/convert2bmp/ to convert this image to a 8-bit bmp file.');
        done();
      });
      fileTransformer('notfound.bmp', function(err, data) {
        expect(err).toBeTruthy();
        expect(err.code).toEqual('ENOENT');
        // expect(err).toEqual('Could not find notfound.bmp in assets folder. Please make sure it is there, check for typos and try again.');
        done();
      });
    });
  });
});



describe('with proper data', function() {
  const rfCallback = function(err, data) {
    if(err) return err;
    return data;
  };
  
  const tfCallback = function(err, data) {
    if(err) return err;
    return data;
  };
  
  let bmArrayData = fileReader('palette-bitmap.bmp', rfCallback);
    done();
  });

  it('should have the correct order of hex strings', done => {
    var expectedResult = [ '3120657367206577' ];

    readFileHelper(this.paths, function(err, data) {
      console.log('data array: ', data);
      expect(err).toEqual(null);
      expect(data[0]).toEqual(expectedResult[0]);
      done();
    });
  });
});



