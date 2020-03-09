const glob = require('globby');
const { join, resolve } = require('path');
const { CLIEngine } = require('eslint');

const fixtures = glob.sync(join(__dirname, '../__fixtures__/**/index.*'));

const cli = new CLIEngine();

test.each(fixtures)('%s', (path) => {
  const report = cli.executeOnFiles([path]);
  expect(report.results).toHaveLength(1);
  expect(report.results[0].errorCount).toBe(0);
  expect(report.results[0].warningCount).toBe(0);
});
