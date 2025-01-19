import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/Highlight.jsx',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Exclude React and React-DOM from the bundle
    resolve({ extensions: ['.js', '.jsx'] }), // Support .jsx files
    commonjs(), // Convert CommonJS to ES6
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'], // Transpile React JSX
      extensions: ['.js', '.jsx'], // Process both .js and .jsx files
    }),
  ],
};
