module.exports = {
  stories: [
    '../packages/**/*.stories.(js|mdx)',
  ],
  addons: [
    'storybook-addon-react-flow-docgen/dist/register',
    '@storybook/addon-docs/register',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  presets: [
    {
      name: '@storybook/addon-docs/preset',
      options: {
        configureJSX: true,
        sourceLoaderOptions: {
          parser: 'flow',
          prettierConfig: {
            printWidth: 100,
            tabWidth: 2,
            bracketSpacing: true,
            trailingComma: 'es5',
            singleQuote: true,
          },
        },
      },
    },
  ],
}
