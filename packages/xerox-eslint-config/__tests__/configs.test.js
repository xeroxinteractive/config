const CLIEngine = require('eslint').CLIEngine;

test.each(['index.js', 'react.js', 'typescript.js'])(
  '%s config valid',
  (filename) => {
    expect(
      () =>
        new CLIEngine({
          useEslintrc: false,
          configFile: filename,
        })
    ).not.toThrow();
  }
);
