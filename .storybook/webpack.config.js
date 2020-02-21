const path = require('path')
const webpack = require('webpack')
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')

const include = [
  path.resolve(__dirname, '..', 'packages'),
  path.resolve(__dirname, '..', 'stories'),
  path.resolve(__dirname, '..'),
]

const exclude = function exclude(modulePath) {
  if (!modulePath.includes('node_modules/')) {
    return false
  }

  const splittedPath = modulePath.split('node_modules/')
  const lastPath = splittedPath[splittedPath.length - 1]
  return !lastPath.includes('@exnessimo')
}

module.exports = async({ config: baseConfig }) => ({
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    new webpack.DefinePlugin({
      'process.env.BROWSER': true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include,
        exclude,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
        //     the docs page from the markdown
        test: /\.(stories|story)\.mdx$/,
        use: [
          {
            loader: 'babel-loader',
            // may or may not need this line depending on your app's setup
            options: {
              plugins: ['@babel/plugin-transform-react-jsx'],
            },
          },
          {
            loader: '@mdx-js/loader',
            options: {
              compilers: [createCompiler({})],
            },
          },
        ],
      },
      {
        test: /\.css?$/,
        include,
        exclude,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[name]-[local]',
            },
            import: true,
          },
        }, {
          loader: 'postcss-loader',
          options: {
            config: {
              path: './.storybook/postcss.config.js',
            },
          },
        }],
      },
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
    ],
  },
})
