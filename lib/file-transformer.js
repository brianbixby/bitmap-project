'use strict';

// const fs = require('fs');
module.exports = exports = {};

const transformFileHelper = module.exports = (data, transformation, tfCallback) => {

  function BmData(obj) {
    for (var prop in obj) if(obj[prop]) this[prop] = obj[prop];
  }

  BmData.prototype.invert =  function(data) {
    let rgb = data.colorTableBuffer;
    for(var i = 0; i < rgb.length; i++){
      rgb[i] = Math.floor(255 - rgb[i]);
    }
    return this;
  };

  BmData.prototype.black = function() {

    let rgb = this.colorTableBuffer;
    console.log(rgb);
    rgb.replace(/[0-9]/g, '0');
    console.log(rgb);
    // for(var i = 0; i < rgb.length; i++){
    //   rgb[i] = '0';
    //   console.log(typeof rgb[i], rgb[i]);
    // }
    // console.log('this: ', this);
    // console.log('this.tostring hex: ', this.toString('hex'));
    // console.log('bmData.colorTableBuffer: ', this.colorTableBuffer);
    // console.log('rgb: ', rgb);
    this.buffer.replace(this.colorTableBuffer, rgb);
    // console.log('bmData.colorTableBuffer: ', this.colorTableBuffer);
    // console.log('rgb: ', rgb);
    return this;
    // return this.toString('hex');
  };

  let bmData = new BmData(data[0]);
  bmData.black();

  // dmData.Buffer replace with bmData.colorTableBuffer;
  // buffer: data.toString('hex'),
  // colorTable: data.toString('hex', 54, 1078),
  // colorTableBuffer: this.colorTable.slice(54, 1078),

  let buf = Buffer.from(bmData.buffer, 'hex');
  return tfCallback(null, buf);
};