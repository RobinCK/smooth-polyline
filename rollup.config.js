import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import uglify from 'rollup-plugin-uglify';
import eslint from 'rollup-plugin-eslint';

const pkg = require('./package.json');
const external = Object.keys(pkg.dependencies);

export default {
  entry: 'src/index.js',
  plugins: [
    eslint(),
    babel(babelrc()),
    (process.env.NODE_ENV === 'production' && uglify()),
  ],
  external: external,
  targets: [
    {
      dest: (process.env.NODE_ENV === 'production' ? 'dist/smooth-polyline.min.js' : 'dist/smooth-polyline.js'),
      format: 'umd',
      moduleName: 'smooth',
      sourceMap: false
    }
  ]
};
