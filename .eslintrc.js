module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true
  },
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier', 'svelte3'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    'space-before-function-paren': 0,
    complexity: ['error', { max: 10 }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // eslint-disable-line no-process-env
    'no-process-env': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'no-console': 0
  }
}
