const { toPassPackageAudit } = require('jest-package-audit');

expect.extend({ toPassPackageAudit });

jest.retryTimes(5);
jest.setTimeout(15000);

test('packages do not have vunerabilities', () => {
  return expect({
    level: 'moderate',
    dependencyType: 'dependencies',
  }).toPassPackageAudit({
    allow: [
      // Patched version is ESM!
      'ansi-regex',
      // No patch available.
      'trim-off-newlines',
    ],
  });
});
