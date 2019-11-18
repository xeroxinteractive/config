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
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    // [
    //   'semantic-release-slack-bot',
    //   {
    //     notifyOnSuccess: true,
    //     notifyOnFail: false,
    //     onSuccessTemplate: {
    //       attachments: [
    //         {
    //           title:
    //             ':rocket: A new version of <$repo_url|$package_name> was just published.',
    //           text:
    //             'Version $npm_package_version, triggered by ' +
    //             process.env.CIRCLE_USERNAME,
    //           color: 'good',
    //           attachment_type: 'default',
    //         },
    //       ],
    //     },
    //   },
    // ],
  ],
};
