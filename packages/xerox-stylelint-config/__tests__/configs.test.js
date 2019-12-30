const standalone = require('stylelint/lib/standalone');
const { join } = require('path');

test.each(['index.js', 'sass.js'])('%s config valid', (filename) => {
  return expect(
    standalone({
      code: 'a {}',
      config: {
        extends: `./${filename}`,
      },
      configBasedir: join(__dirname, '../'),
    })
  ).resolves.toBeTruthy();
});
