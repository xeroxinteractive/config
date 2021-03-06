module.exports = {
  plugins: ['prettier', 'import'],
  extends: ['prettier', 'plugin:import/errors', 'plugin:import/warnings'],

  env: {
    node: true,
    es6: true,
  },

  rules: {
    'linebreak-style': ['error', 'unix'],
    'arrow-parens': ['error', 'always'],
    'prettier/prettier': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    eqeqeq: ['error', 'always'],
  },
};
