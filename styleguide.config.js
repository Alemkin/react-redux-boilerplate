const path = require('path')
module.exports = {
  components: 'app/components/**/*.{js,jsx,ts,tsx}',
  webpackConfig: require('./webpack.config.js'),
  require: [path.resolve(__dirname, 'styleguide/setup.js')],
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/app/components/App/**/*',
    '**/app/components/Header/index.js',
    '**/app/components/Home/index.js'
  ]
}
