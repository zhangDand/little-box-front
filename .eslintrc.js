module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true
  },
  // 'parser': 'babel-eslint',
  'extends': ['eslint:recommended', 'vue'],
  'plugins': ['vuefix', 'vue'],
  'parserOptions': {
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
