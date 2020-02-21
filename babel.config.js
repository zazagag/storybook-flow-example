const pkg = require('./package.json')

module.exports = (api) => {
  api.cache(true)

  const presets = [
    '@babel/preset-flow',
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      modules: false,
      shippedProposals: true,
      corejs: {
        version: 3,
      },
    }],
    '@babel/preset-react',
  ]

  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/transform-runtime',
    'add-react-displayname',
    [
      'react-docgen', {
        DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES',
      },
    ],
  ]

  return {
    presets,
    plugins,
  }
}
