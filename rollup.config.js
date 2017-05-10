import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import uglify from 'rollup-plugin-uglify';

const pkg = require('./package.json');
const external = Object.keys(pkg.dependencies);

export default {
  entry: 'src/index.js',
  plugins: [
    babel(babelrc()),
    uglify()
  ],
  external: external,
  targets: [
    {
      dest: 'dist/smooth-polyline.js',
      format: 'umd',
      moduleName: 'smooth',
      sourceMap: false
    }
  ]
};
