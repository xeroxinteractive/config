#!/usr/bin/env node

import { findUp } from 'find-up';
import path from 'path';
import chalk from 'chalk';
import { pathToFileURL } from 'url';

const configPath = await findUp([
  'x-cli.config.mjs',
  'x-cli.config.cjs',
  'x-cli.config.js',
]);
if (configPath) {
  const url = pathToFileURL(configPath);
  const { run } = await import(url.href);
  process.chdir(path.dirname(configPath));
  run();
} else {
  console.warn(
    chalk.yellow(
      'No Xerox CLI configuration found. Make sure your current working directory is within a participating Xerox project.'
    )
  );
}
