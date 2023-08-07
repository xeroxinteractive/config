import { test, expect } from 'vitest';
import styelint from 'stylelint';

test.each(['index.cjs', 'sass.cjs'])('%s config valid', async (filename) => {
  await expect(
    styelint.lint({
      code: 'a {}',
      config: {
        extends: `./${filename}`,
      },
      configBasedir: new URL('../', import.meta.url).pathname,
    })
  ).resolves.toBeTruthy();
});
