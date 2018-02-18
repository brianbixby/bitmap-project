'use strict';

// const readFileHelper = require('./lib/file-reader.js');
const transformFileHelper = require('../lib/file-transformer.js');
// const writeFileHelper = require('./lib/file-writer.js');
require('jest');



describe('Transform Module', function(){
  describe('invert', function(){
    it('should invert the color table', function(done){
      let testInvert = new BmData[0];
      transformFileHelper('testInvert', function(){
        testInvert.pixelArray = [1, 2, 3];
        testInvert.invert();
        expect(testInvert.pixelArray).toEqual([3, 2, 1]);
        done();
      });
    });
  });
  // describe('greyscale', function(){
  //     it('should return the average of the numbers', function(done){

  //         done();
  //     })
  // })
});