const { join } = require('path');

module.exports = {
  extends: [
    '@xerox',
    '@xerox/eslint-config/react',
    '@xerox/eslint-config/typescript',
  ],
  parserOptions: {
    project: join(__dirname, './tsconfig.json'),
  },
};
