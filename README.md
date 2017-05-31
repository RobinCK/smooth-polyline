# smooth-polyline

Smoothing algorithm for 2D lines and polygons

<div align="center">

  [![Build Status](https://img.shields.io/travis/RobinCK/smooth-polyline.svg?style=flat-square)](https://travis-ci.org/RobinCK/smooth-polyline)[![Code Climate](https://img.shields.io/codeclimate/github/RobinCK/smooth-polyline.svg?style=flat-square)](https://codeclimate.com/github/RobinCK/smooth-polyline)[![npm](https://img.shields.io/npm/dt/smooth-polyline.svg?style=flat-square)](https://github.com/RobinCK/smooth-polyline)[![Dependencies](https://david-dm.org/robinck/smooth-polyline.svg?style=flat-square)](https://david-dm.org/robinck/smooth-polyline)[![devDependencies](https://david-dm.org/robinck/smooth-polyline/dev-status.svg?style=flat-square)](https://david-dm.org/robinck/smooth-polyline#info=devDependencies&view=table)[![Bower version](https://img.shields.io/bower/v/smooth-polyline.svg?style=flat-square)](https://github.com/RobinCK/smooth-polyline)[![NPM version](https://img.shields.io/npm/v/smooth-polyline.svg?style=flat-square)](https://www.npmjs.com/package/smooth-polyline)[![npm](https://img.shields.io/npm/l/smooth-polyline.svg?style=flat-square)](https://github.com/RobinCK/smooth-polyline/blob/master/LICENSE)

</div>

## Install
#### CDN

Recommended: https://unpkg.com/smooth-polyline, which will reflect the latest version as soon as it is published to npm. You can also browse the source of the npm package at https://unpkg.com/smooth-polyline/

#### NPM

``` bash
npm install smooth-polyline --save
```

#### Yarn

``` bash
yarn add smooth-polyline
```

#### Bower

``` bash
bower install smooth-polyline --save
```

## Development Setup

``` bash
# install dependencies
npm install

# build dist files
npm run build
```

## Usage
```javascript
  var smoothLine = smooth([[ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ]]);
  /* 
    return [
      [1,1],
      [1,1.15],
      [1,1.8499999999999999],
      [1.15,2],
      [1.8499999999999999,2],
      [2,1.8499999999999999],
      [2,1.15],
      [2,1]
    ]
   */
```

```javascript
  var smoothLine = smooth(smooth([[ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ]]));

  /* 
    return [
      [1,1],
      [1,1.0225],
      [1,1.1275],
      [1,1.255],
      [1,1.7449999999999997],
      [1.0225,1.8724999999999998],
      [1.1275,1.9775],
      [1.255,2],
      [1.7449999999999997,2],
      [1.8724999999999998,1.9775],
      [1.9775,1.8724999999999998],
      [2,1.7449999999999997],
      [2,1.255],
      [2,1.1275],
      [2,1.0225],
      [2,1]
    ]
   */
```

## License
MIT © [Igor Ognichenko](https://github.com/RobinCK)
