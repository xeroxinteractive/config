import { test, expect } from 'vitest';
import { ESLint } from 'eslint';
import { posix } from 'path';

test.each(['index.js', 'react.js', 'typescript.js', 'jest.js'])(
  '%s config valid',
  (filename) => {
    expect(
      () =>
        new ESLint({
          cwd: posix.resolve(__dirname, '../'),
          useEslintrc: false,
          overrideConfigFile: filename,
        })
    ).not.toThrow();
  }
);
