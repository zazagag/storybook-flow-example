const postCssResolver = require('../packages/style/themes').postCssResolver

module.exports = () => ({
  plugins: [
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'custom-media-queries': {
          importFrom: 'packages/style/vars/index.css',
        },
        'media-query-ranges': true,
        'custom-selectors': true,
        'matches-pseudo-class': true,
        'not-pseudo-class': true,
      },
    }),

    require('postcss-nested')(),
    require('postcss-import')({
      resolve: postCssResolver,
    }),
  ],
})
