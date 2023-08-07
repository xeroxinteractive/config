import { test, expect } from 'vitest';
import glob from 'globby';
import { ESLint } from 'eslint';

const fixtures = glob.sync(
  new URL('../../../fixtures/*/index.*', import.meta.url).pathname
);

const cli = new ESLint();

test.each(fixtures)('%s', async (path) => {
  const report = await cli.lintFiles([path]);
  expect(report).toHaveLength(1);
  expect(report[0].errorCount).toBe(0);
  expect(report[0].warningCount).toBe(0);
});
