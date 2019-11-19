module.exports = {
  plugins: ['@typescript-eslint', 'jsdoc'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    jsdoc: {
      mode: 'typescript',
    },
  },
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-use-before-define': [
      'warn',
      {
        functions: false,
      },
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    'jsdoc/check-examples': 'off',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-tag-names': [
      'error',
      {
        definedTags: ['remarks', 'jest-environment'],
      },
    ],
    'jsdoc/check-types': 'warn',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/require-description': 'off',
    'jsdoc/require-description-complete-sentence': 'error',
    'jsdoc/require-example': 'off',
    'jsdoc/require-hyphen-before-param-description': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns': 'error',
    'jsdoc/require-returns-check': 'error',
    'jsdoc/require-returns-description': 'error',
    'jsdoc/require-returns-type': 'off',
    'jsdoc/valid-types': 'off',
    'jsdoc/require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'jsdoc/require-jsdoc': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: ['*.test.{tsx,ts}', '**/__mocks__/**/*.{tsx,ts}'],
      rules: {
        'jsdoc/require-jsdoc': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
      },
    },
  ],
};
