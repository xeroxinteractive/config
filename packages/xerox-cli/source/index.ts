import findUp from 'find-up';
import path from 'path';

const configPath = findUp.sync('x-cli.config.js');
if (configPath) {
  const {run} = require(configPath);
  process.chdir(path.dirname(configPath));
  run();
}