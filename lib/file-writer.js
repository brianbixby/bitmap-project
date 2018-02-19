'use strict';

const fs = require('fs');

const writeFileHelper = module.exports = (data, transformedFilePath, wfCallback) => {

  fs.writeFile(`${__dirname}/../assets/${transformedFilePath}`, data, function(err, data) {
    if (err) return wfCallback(err);
  });
};

