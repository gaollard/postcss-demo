import json from '@rollup/plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default {
  input: 'main.js',
  output: {
    file: 'bundle.js',
    format: 'umd',
    name: 'sman',
  },
  plugins: [
    json(),
    resolve({
      browser: true
    }),
    commonjs(),
    nodePolyfills(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
};