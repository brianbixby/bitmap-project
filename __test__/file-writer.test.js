'use strict';

const fileWriter = require('../lib/file-writer.js');
require('jest');

describe('File Writer Module', function() {
  describe('with improper file paths', function() {
    it('should return an error', function(done) {
      fileWriter('doesnotexist.bmp', function(err) {
        expect(err).toBeTruthy();
        expect(err.code).toEqual('ENOENT');
        done();
      });
    });
  });
  describe('with proper file paths', function() {
    it('should return file data', function(done) {
      fileWriter('palette-bitmap.bmp', function(err) {
        expect(err).toBe(null);
        done();
      });
    });
  });
});

const writeFileHelper = module.exports = (data, transformedFilePath, wfCallback) => {

  fs.writeFile(`${__dirname}/../assets/${transformedFilePath}`, data, function(err, data) {
    if (err) return wfCallback(err);
  });
};


describe('with proper file paths', function() {
  beforeAll((done) => {
    this.paths = [
      `${__dirname}/../data/one.txt`,
      `${__dirname}/../data/two.txt`,
      `${__dirname}/../data/three.txt`
    ];
    done();
  });
  it('should have the correct order of hex strings', done => {
    var expectedResult = [ '3120657367206577', '3220206577676577', '332066696c652061' ];

    readFileHelper(this.paths, function(err, data) {
      console.log('data array: ', data);
      expect(err).toEqual(null);
      expect(data[0]).toEqual(expectedResult[0]);
      expect(data[1]).toEqual(expectedResult[1]);
      expect(data[2]).toEqual(expectedResult[2]);
      done();
    });
  });
});