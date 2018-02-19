'use strict';

const fileWriter = require('../lib/file-writer.js');
require('jest');

describe('File WriterModule', function() {
  describe('with improper file output', function() {
    it('should return an error', function(done) {
      fileWriter('palette-bitmap.png', function(err) {
        expect(err).toBeTruthy();
        expect(err.code).toEqual('ENOENT');
        // expect(err).toEqual('palette-bitmap.png is not a bmp file. Please visit https://online-converting.com/image/convert2bmp/ to convert this image to a 8-bit bmp file.');
        done();
      });
      fileWriter('notfound.bmp', function(err) {
        expect(err).toBeTruthy();
        expect(err.code).toEqual('ENOENT');
        // expect(err).toEqual('Could not find notfound.bmp in assets folder. Please make sure it is there, check for typos and try again.');
        done();
      });
    });
  });
});