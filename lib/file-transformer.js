'use strict';

// const fs = require('fs');
module.exports = exports = {};

const transformFileHelper = module.exports = (data, transformation, tfCallback) => {

  function BmData(obj) {
    for (var prop in obj) if(obj[prop]) this[prop] = obj[prop];
    this.colorTableBuffer = this.buffer.slice(this.dibHeaderSize + 14, this.offset);
    this.pixelArray = this.buffer.slice(this.offset, this.size);
    console.log('pa length: ', this.pixelArray.length, this.pixelArray, this.pixelArray[0], typeof this.pixelArray[0]);
  }

  BmData.prototype.invert =  function() {
    console.log('pixel array length: ', this.pixelArray.length, 'colortable buffer length: ', this.colorTableBuffer.length, this);
    this.pixelArray.reverse();
    return this;
  };

  BmData.prototype.colorinvert =  function() {
    console.log(this.colorTableBuffer);
    this.colorTableBuffer.reverse();
    console.log(this.colorTableBuffer.slice(1000, 1024));
    return this;
  };

  BmData.prototype.greyscale = function () {
    for(var i = 0; i <this.colorTableBuffer.length; i+=4) {
      let avg = (this.colorTableBuffer[i] + this.colorTableBuffer[i+1] + this.colorTableBuffer[i+2]) / 3;
      this.colorTableBuffer[i] = avg;
      this.colorTableBuffer[i+1] = avg;
      this.colorTableBuffer[i+2] = avg;
    }
    return this;
  };

  BmData.prototype.redscale = function () {
    for(var i = 0; i <this.colorTableBuffer.length; i+=4) {
      this.colorTableBuffer[i+1] = 0;
    }
    return this;
  };

  BmData.prototype.bluescale = function () {
    for(var i = 0; i <this.colorTableBuffer.length; i+=4) {
      this.colorTableBuffer[i+2] = 0;
    }
    return this;
  };

  BmData.prototype.greenscale = function () {
    for(var i = 0; i <this.colorTableBuffer.length; i+=4) {
      this.colorTableBuffer[i] = 0;
    }
    return this;
  };

  BmData.prototype.whitereplace = function () {
    for(var i = 0; i <this.colorTableBuffer.length; i+=4) {
      if(this.colorTableBuffer[i] == 255 && this.colorTableBuffer[i+1] == 255 &&  this.colorTableBuffer[i+2] == 255) {
        this.colorTableBuffer[i] = 0;
        this.colorTableBuffer[i+1] = 0;
        this.colorTableBuffer[i+2] = 0;
      }
    }
    return this;
  };

  BmData.prototype.blackreplace = function () {
    for(var i = 0; i <this.colorTableBuffer.length; i+=4) {
      if(this.colorTableBuffer[i] == 0 && this.colorTableBuffer[i+1] == 0 &&  this.colorTableBuffer[i+2] == 0) {
        this.colorTableBuffer[i] = 255;
        this.colorTableBuffer[i+1] = 255;
        this.colorTableBuffer[i+2] = 255;
      }
    }
    return this;
  };

  BmData.prototype.border = function () {

    let rowCount = this.height - 10;
    let rowSize = this.size/this.height;
    console.log(typeof this.pixelArray);
    

    let startingPoint = rowSize * rowCount;
    console.log('startingPoint', startingPoint);
    for(var i=9000; i<this.pixelArray.length; i++) {
      this.pixelArray[i] = 10;
      console.log(this.pixelArray[i]);
    }

    return this;
  };

  BmData.prototype.invertedverticalmirror = function () {
    let startingPoint = this.imageSize/2;
    let mirrorPoint = this.imageSize/2 -1;

    for(var i=startingPoint; i>=0; i--) {
      this.pixelArray[i] = this.pixelArray[mirrorPoint];
      mirrorPoint ++;
    }
    return this;
  };
  

  BmData.prototype.verticalmirror = function () {
    let startingPoint = this.imageSize/2;
    let mirrorPoint = this.imageSize;

    for(var i=startingPoint; i>=0; i--) {
      this.pixelArray[i] = this.pixelArray[mirrorPoint];
      mirrorPoint --;
    }
    return this;
  };

  BmData.prototype.black = function() {
    for(var i = 0; i < this.colorTableBuffer.length; i++){
      this.colorTableBuffer[i] = 0;
      console.log(typeof this.colorTableBuffer[i], this.colorTableBuffer[i]);
    }
    return this.colortableBuffer;
  };

  let bmData = new BmData(data[0]);
  eval(`bmData.${transformation}()`);

  let buf = Buffer.from(bmData.buffer, 'hex');
  return tfCallback(null, buf);
};