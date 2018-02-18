'use strict';

// const fs = require('fs');
module.exports = exports = {};

const transformFileHelper = module.exports = (data, transformation, tfCallback) => {

  function BmData(obj) {
    for (var prop in obj) if(obj[prop]) this[prop] = obj[prop];
    this.pixelArray = this.buffer.slice(this.offset,this.offset + this.size);
  }

  BmData.prototype.invert =  function() {
    console.log(typeof pixelArray, this.pixelArray);
    this.pixelArray.reverse();
    console.log(typeof pixelArray, this.pixelArray);
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
      this.colorTableBuffer[i+2] = 0;
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