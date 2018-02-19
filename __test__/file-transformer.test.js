'use strict';

const fileTransformer = require('../lib/file-transformer.js');
const testAssets = require('./test-assets/test-assets');

require('jest');

describe('File transformer Module', () => {
  describe('with improper data types', () => {
    it('should throw argument data type error', done => {
      expect(() => {
        fileTransformer(testAssets.buffer, 'greyscale', function(){});
      }).toThrow('argument data type error');
      done();
    });
  });
  describe('with proper data types', () => {
    it('should return file data', done => {
      fileTransformer(testAssets.buffer, ['greyscale'], function(err) {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe('fileTransformer invert', () => {
    it('the invert methods pixel array values should be reversed', done => {
      fileTransformer(testAssets.buffer, ['invert'], function(err, data) {
        expect(data.slice(1078, 11078).toString('hex')).toEqual(testAssets.invertedPixelArray.toString('hex'));
        done();
      });
    });
  });
});