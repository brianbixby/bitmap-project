'use strict';

const fileTransformer = require('../lib/file-transformer.js');
require('jest');

describe('File Transformer Module', function() {
  describe('with improper file path or file type', function() {
    it('should return an error', function(done) {
      fileTransformer('palette-bitmap.png', function(err) {
        expect(err).toBeTruthy();
        expect(err.code).toEqual('ENOENT');
        // expect(err).toEqual('palette-bitmap.png is not a bmp file. Please visit https://online-converting.com/image/convert2bmp/ to convert this image to a 8-bit bmp file.');
        done();
      });
      fileTransformer('notfound.bmp', function(err) {
        expect(err).toBeTruthy();
        expect(err.code).toEqual('ENOENT');
        // expect(err).toEqual('Could not find notfound.bmp in assets folder. Please make sure it is there, check for typos and try again.');
        done();
      });
    });
  });
});