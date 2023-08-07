import autoModule from '@auto-it/core';
const Auto = autoModule.Auto;
const LabelExistsError = autoModule.LabelExistsError;
import { writeFile } from 'fs/promises';
import * as url from 'url';

async function applyForcePublishLabels() {
  /**
   * @type {import('@auto-it/core').Auto}
   */
  const auto = new Auto();

  await auto.loadConfig();

  const packages = [
    { label: 'release: force (cli)', packageName: '@xerox/cli' },
    {
      label: 'release: force (browserslist-config)',
      packageName: '@xerox/browserslist-config',
    },
    {
      label: 'release: force (eslint-config)',
      packageName: '@xerox/eslint-config',
    },
    {
      label: 'release: force (prettier-config)',
      packageName: '@xerox/prettier-config',
    },
    {
      label: 'release: force (semantic-release-config)',
      packageName: '@xerox/semantic-release-config',
    },
    {
      label: 'release: force (stylelint-config)',
      packageName: '@xerox/stylelint-config',
    },
  ];

  async function labelExists(label) {
    try {
      await auto.label({ exists: label, pr: 1233 });
      return true;
    } catch (e) {
      if (e instanceof LabelExistsError) {
        return false;
      } else {
        throw e;
      }
    }
  }

  const forcedPackages = [];

  for (const { label, packageName } of packages) {
    if (await labelExists(label)) {
      forcedPackages.push(packageName);
    }
  }

  if (forcedPackages.length === 0) {
    console.info('No force publish labels found');
    return;
  }

  const lernaPath = url.fileURLToPath(
    new URL('../../lerna.json', import.meta.url)
  );

  const lerna = {
    version: 'independent',
    npmClient: 'pnpm',
    command: {
      publish: {
        registry: 'https://registry.npmjs.org',
      },
    },
  };

  lerna.command.version = {
    forcePublish: forcedPackages.join(','),
  };

  await writeFile(lernaPath, JSON.stringify(lerna, null, 2));

  console.info(`Applied force publish labels: ${forcedPackages.join(',')}`);
}

applyForcePublishLabels();
