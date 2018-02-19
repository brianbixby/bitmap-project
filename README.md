Synopsis:
  For this assignment, we built a bitmap (.bmp) transformer CLI. It reads a bitmap in from disk, runs one or more color or raster transforms and then writes it out to a new file. This project required the use of node buffers in order to manipulate binary data. Our solutions are composed of small tested modules that solve specific problems. The entry point to of our CLI is an index.js file in the root of our application, and all helper modules are in the lib directory. 
  This application can help perform a few basic image processing transformations on bitmap files that are BM bitmaps, that have 8 or 24 bit color depth, and that have a color palette.

Library Structure:
  file-reader.js
  file-transformer.js
  file-writer.js
  .gitignore
  .eslintrc
  .eslintignore
  package-lock.json
    modifies the package.json 
  package.json
    a lint script has been configured for running eslint
    a test script has been configured for running jest
  README.md

Code Example:
  file-reader.js- A module that has a variable that exports the file Path and the Callback. The reader takes in the bmp file and reads what its made up of, turns the image into a buffer file that makes it easy to transform it. 

  file-transformer.js- The transformer module receives data from the bitmap reader and instantiates a bitmap object, then passes it to the writer. 

  file-writer.js- This module receives the data from the transformer path with the new file's name, and the desired transformation method. Within this function, the data from the read file is passed through a constructor, passed through a transformation method, and then written to a new file. 
  

Motivation:
  This is codefellows 401- Lab 04: Bitmap Transformers assignment.

Installation:
  To install bitmap transformer:

Tests:
  To use the Command Line Interface, the user must first type node index.js and enter three arguments:
    1) The original bitmap file path, using the following structure. (ie: palette-bitmap.bmp)
    2) The output file name. (ie: transformed-palette-bitmap.bmp)
    3) The transform method name. See below for all transform methods. (ie: invert)
Example: node index.js palette-bitmap.bmp transformed-palette-bitmap.bmp invert

Transform methods:
  Invert: Inverts the original file.
  greyscale: Transforms original bitmap to greyscale.
  redscale: Transforms original bitmap to redscale.
  bluescale: Transforms original bitmap to bluescale.
  white replace: Replaces white to black
  black replace: Replaces black to white
  verical mirror: Flips vertically and mirrors the original file.
  inverted vertical mirror: Vertically inverts, flips and mirrors the original file simultaneously.
  horizontal mirror: Flips horizontally and mirrors the original file
  inverted horizontal mirror: Horizontally inverts, flips and mirrors the original file simultaneously.

Contributors:
  Brian
  Christian 
  Katy
  Tama

License:
  MIT
  