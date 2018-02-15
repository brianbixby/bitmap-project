'use strict';

const callback = module.exports = function(err, data) {
  if(err) throw err;
  console.log(data);
  return data;
};