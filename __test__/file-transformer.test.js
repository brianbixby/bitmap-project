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

  describe('fileTransformer greyscale', () => {
    it('the greyscale methods color table buffer values should be an average for each rgb set', done => {
      fileTransformer(testAssets.buffer, ['greyscale'], function(err, data) {
        expect(data.slice(54, 1078).toString('hex')).toEqual(testAssets.greyscaleColorTableBuffer.toString('hex'));
        done();
      });
    });
  });

  describe('fileTransformer verticalmirror', () => {
    it('the verticalmirror methods pixel array values should be reversed', done => {
      fileTransformer(testAssets.buffer, ['verticalmirror'], function(err, data) {
        expect(data.slice(1078, 11078).toString('hex')).toEqual(testAssets.verticalmirrorPixelArray.toString('hex'));
        done();
      });
    });
  });




});