module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          {
            type: 'chore',
            scope: 'deps',
            subject: '/\\[security\\].*/',
            release: 'patch',
          },
          {
            type: 'refactor',
            release: 'patch',
          },
          {
            type: 'perf',
            release: 'patch',
          },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        presetConfig: {
          types: [
            { type: 'feat', section: 'Features' },
            { type: 'fix', section: 'Bug Fixes' },
            { type: 'refactor', section: 'Refactoring' },
            { type: 'perf', section: 'Performance Improvements' },
            { type: 'chore', hidden: true },
            { type: 'docs', hidden: true },
            { type: 'style', hidden: true },
            { type: 'test', hidden: true },
          ],
        },
      },
    ],
    '@semantic-release/changelog',
    '@semantic-release/git',
  ],
};
