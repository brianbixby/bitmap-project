'use strict';

// const fs = require('fs');
module.exports = exports = {};

const transformFileHelper = module.exports = (data, transformation, tfCallback) => {

  function BmData(obj) {
    for (var prop in obj) if(obj[prop]) this[prop] = obj[prop];
    this.colorTableBuffer = this.buffer.slice(this.dibHeaderSize + 14, this.offset);
    this.pixelArray = this.buffer.slice(this.offset, this.size);
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
      let avg = (this.colorTableBuffer[i] + this.colorTableBuffer[i+1] + this.colorTableBuffer[i+2]) / 3;
      this.colorTableBuffer[i+1] = 0;
    }
    return this;
  };

  BmData.prototype.bluescale = function () {
    for(var i = 0; i <this.colorTableBuffer.length; i+=4) {
      let avg = (this.colorTableBuffer[i] + this.colorTableBuffer[i+1] + this.colorTableBuffer[i+2]) / 3;
      this.colorTableBuffer[i+2] = 0;
    }
    return this;
  };

  BmData.prototype.greenscale = function () {
    for(var i = 0; i <this.colorTableBuffer.length; i+=4) {
      let avg = (this.colorTableBuffer[i] + this.colorTableBuffer[i+1] + this.colorTableBuffer[i+2]) / 3;
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