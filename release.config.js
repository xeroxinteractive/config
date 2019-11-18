const path = require('path');

module.exports = {
  extends: '../xerox-semantic-release-config/npm.js',
  commitPaths: [
    '../../yarn.lock',
    '../../package.json',
    '../../LICENSE',
    './*',
  ],
  tagFormat: `${path.parse(process.cwd()).name}-\${version}`,
};
