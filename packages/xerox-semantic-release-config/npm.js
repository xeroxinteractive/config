const simple = require('./simple.js');

const npm = simple;

npm.plugins.push('@semantic-release/npm');
npm.plugins.push([
  'semantic-release-slack-bot',
  {
    notifyOnSuccess: true,
    notifyOnFail: false,
    onSuccessTemplate: {
      attachments: [
        {
          title:
            ':rocket: A new version of <$repo_url|$package_name> was just published.',
          text:
            'Version $npm_package_version, triggered by ' +
            process.env.CIRCLE_USERNAME,
          color: 'good',
          attachment_type: 'default',
        },
      ],
    },
  },
]);

module.exports = npm;
