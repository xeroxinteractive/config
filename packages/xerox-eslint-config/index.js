module.exports = {
  plugins: ['jest', 'prettier', 'import'],
  extends: [
    'plugin:jest/recommended',
    'prettier',
    'prettier/babel',
    'prettier/standard',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],

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
  },
};
