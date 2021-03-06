import findUp from 'find-up';
import path from 'path';
import chalk from 'chalk';

const configPath = findUp.sync('x-cli.config.js');
if (configPath) {
  const {run} = require(configPath);
  process.chdir(path.dirname(configPath));
  run();
} else {
  console.warn(chalk.yellow('No Xerox CLI configuration found. Make sure your current working directory is within a participating Xerox project.'));
}