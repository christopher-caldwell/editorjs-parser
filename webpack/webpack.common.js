const path = require('path')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  entry: path.resolve(process.cwd(), 'src/index.ts'),
  output: {
    path: path.resolve(process.cwd(), 'dist/'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript'],
            plugins: [
              // new BundleAnalyzerPlugin()
              '@babel/plugin-proposal-optional-chaining',
              'add-module-exports',
              [
                'module-resolver',
                {
                  root: ['./src'],
                  alias: {
                    '@': './src/',
                  },
                },
              ],
            ],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  stats: 'minimal',
  target: 'node',
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
    extensions: ['.ts', '.js'],
  },
}
