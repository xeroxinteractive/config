import autoModule from '@auto-it/core';
const Auto = autoModule.Auto;
import { readFile, writeFile } from 'fs/promises';
import * as url from 'url';

async function applyForcePublishLabels() {
  const auto = new Auto();

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
      await auto.label({ exists: label });
      return true;
    } catch (e) {
      return false;
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
  const lernaFile = await readFile(lernaPath);
  const lerna = JSON.parse(lernaFile.toString());
  if (!lerna) {
    throw new Error('Could not find lerna.json');
  }

  lerna.command = lerna.command ?? {};
  lerna.command.version = lerna.command.version ?? {};
  lerna.command.version.forcePublish = forcedPackages.join(',');

  await writeFile(lernaPath, JSON.stringify(lerna, null, 2));

  console.info(`Applied force publish labels: ${forcedPackages.join(',')}`);
}

applyForcePublishLabels();
