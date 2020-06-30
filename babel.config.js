module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    'transform-object-rest-spread',
    '@babel/syntax-dynamic-import'
  ],
  env: {
    test: {
      presets: [['@babel/preset-env'], '@babel/preset-react']
    }
  }
}
