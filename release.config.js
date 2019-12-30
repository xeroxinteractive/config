const path = require('path');

module.exports = {
  extends: '../xerox-semantic-release-config/npm.js',
  commitPaths: ['../../LICENSE', './*'],
  tagFormat: `${path.parse(process.cwd()).name}-\${version}`,
};
