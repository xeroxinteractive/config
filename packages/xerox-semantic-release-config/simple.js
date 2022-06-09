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
            subject: '[security]*',
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
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'SECURITY'],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        presetConfig: {
          types: [
            { type: 'feat', hidden: false, section: 'Features' },
            { type: 'fix', hidden: false, section: 'Bug Fixes' },
            { type: 'refactor', hidden: false, section: 'Refactoring' },
            {
              type: 'perf',
              hidden: false,
              section: 'Performance Improvements',
            },
            { type: 'chore', hidden: false },
            { type: 'docs', hidden: false },
            { type: 'style', hidden: false },
            { type: 'test', hidden: false },
          ],
        },
      },
    ],
    '@semantic-release/changelog',
    '@semantic-release/git',
  ],
};
