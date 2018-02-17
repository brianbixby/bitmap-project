'use strict';

// const fs = require('fs');
module.exports = exports = {};

const transformFileHelper = module.exports = (data, transformation, tfCallback) => {

  function BmData(obj) {
    for (var prop in obj) if(obj[prop]) this[prop] = obj[prop];
  }

  // BmData.prototype.invert =  function(data) {
  //   let rgb = data.colorTableBuffer;
  //   for(var i = 0; i < rgb.length; i++){
  //     rgb[i] = Math.floor(255 - rgb[i]);
  //   }
  //   return this;
  // };

  BmData.prototype.black = function() {
    for(var i = 0; i < this.colorTableBuffer.length; i++){
      this.colorTableBuffer[i] = 0;
      console.log(typeof this.colorTableBuffer[i], this.colorTableBuffer[i]);
    }
    return this.colortableBuffer;
  };

  let bmData = new BmData(data[0]);
  bmData.black();

  let buf = Buffer.from(bmData.buffer, 'hex');
  return tfCallback(null, buf);
};