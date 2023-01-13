const glob = require('globby');
const { posix } = require('path');
const { ESLint } = require('eslint');

const fixtures = glob.sync(
  posix.join(__dirname, '../../../fixtures/*/index.*')
);

const cli = new ESLint();

test.each(fixtures)('%s', async (path) => {
  const report = await cli.lintFiles([path]);
  expect(report).toHaveLength(1);
  expect(report[0].errorCount).toBe(0);
  expect(report[0].warningCount).toBe(0);
});
