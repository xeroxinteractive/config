# @xerox/browserslist-config

> Browserslist shareable configuration for Xerox projects.

[![circleci status][circleci-badge]][circleci-link]
[![npm package][npm-badge]][npm-link]
[![license MIT][license-badge]][license-link]
[![commit style angular][commit-style-badge]][commit-style-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]
[![Dependabot Status][dependabot-badge]][dependabot-link]

## Usage
1. Install this config and prettier as a `devDependency`:
```bash
yarn add @xerox/browserslist-config --dev
# or
npm install @xerox/browserslist-config --save-dev
```
2. Add the following to your `package.json`:
```jsonc
{
  // ...
  "browserslist": [
    "extends @xerox/browserslist-config"
  ]
  // ...
}
```
If you're using environments:
```jsonc
{
  // ...
  "browserslist": {
    "build": [
      "extends @xerox/browserslist-config"
    ],
    "test": [
      "extends @xerox/browserslist-config/node"
    ]
  }
  // ...
}
```

## Configurations
Currently there are 3 different browserslist configurations:
1. `@xerox/browserslist-config` which uses Adobe Analytics data to get the most appropriate browsers to be supported across Xerox websites.
2. `@xerox/browserslist-config/node` which gets the current node version that is expected to be supported across Xerox projects.
3. `@xerox/browserslist-config/browserstack` which gets the browsers to be test against in browserstack.


---
[LICENSE][license-link] | [CHANGELOG][changelog-link]

[license-link]: ../../LICENSE
[changelog-link]: ./CHANGELOG.md

[circleci-badge]: https://flat.badgen.net/circleci/github/xeroxinteractive/config/master
[circleci-link]: https://circleci.com/gh/xeroxinteractive/config/tree/master

[npm-badge]: https://flat.badgen.net/npm/v/@xerox/browserslist-config?color=cyan
[npm-link]: https://www.npmjs.com/package/@xerox/browserslist-config

[license-badge]: https://flat.badgen.net/badge/license/MIT

[commit-style-badge]: https://flat.badgen.net/badge/commit%20style/angular/purple
[commit-style-link]: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines

[semantic-release-badge]: https://flat.badgen.net/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80/semantic%20release/e10079
[semantic-release-link]: https://github.com/semantic-release/semantic-release

[dependabot-badge]: https://flat.badgen.net/dependabot/xeroxinteractive/config?icon=dependabot
[dependabot-link]: https://dependabot.com