import path from 'path';

import webpack from 'webpack';


export default (fixture) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.jsonc$/,
        use: {
          loader: path.resolve(__dirname, '../src/cjs.js'),
          options: {
            minify: true
          }
        }
      }]
    }
  });

  // compiler.outputFileSystem = createFsFromVolume(new Volume());

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        reject(err);
        return;
      }
      if (stats.hasErrors()) reject(new Error(stats.toJson().errors));

      resolve(stats);
    });
  });
};