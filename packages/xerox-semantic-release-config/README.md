# @xerox/semantic-release-config

> semantic-release shareable config for Xerox projects

[![circleci status][circleci-badge]][circleci-link]
[![npm package][npm-badge]][npm-link]
[![license MIT][license-badge]][license]
[![commit style angular][commit-style-badge]][commit-style-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]

## Usage
1. Install this config and eslint as a `devDependency`:
```bash
yarn add semantic-release @xerox/semantic-release-config --dev
# or
npm install semantic-release @xerox/semantic-release-config --save-dev
```
2. Extend the base and any additional configs in your semantic release configuration:
```jsonc
{
  "extends": "@xerox/semantic-release-config/npm"
}
// or
{
  "extends": "@xerox/semantic-release-config/simple"
}
```

## Configurations
### npm
For publishing npm modules.

#### Plugins:
* [@semantic-release/plugin-commit-analyzer](https://github.com/semantic-release/commit-analyzer)
* [@semantic-release/plugin-release-notes-generator](https://github.com/semantic-release/release-notes-generator)
* [@semantic-release/plugin-changelog](https://github.com/semantic-release/changelog)
* [@semantic-release/plugin-npm](https://github.com/semantic-release/npm)
* [@semantic-release/plugin-git](https://github.com/semantic-release/git)
* [@semantic-release-slack-bot](https://github.com/juliuscc/semantic-release-slack-bot/)

#### Environment variables:
* `NPM_TOKEN`: so semantic-release can publish to npm.
* `SLACK_WEBHOOK`: so semantic-release-slack-bot can notify slack.

### simple
For keeping track of changes.

#### Plugins:
* [@semantic-release/plugin-commit-analyzer](https://github.com/semantic-release/commit-analyzer)
* [@semantic-release/plugin-release-notes-generator](https://github.com/semantic-release/release-notes-generator)
* [@semantic-release/plugin-changelog](https://github.com/semantic-release/changelog)
* [@semantic-release/plugin-git](https://github.com/semantic-release/git)

---

[LICENSE][license] | [CHANGELOG][changelog]

[license]: ../../LICENSE
[changelog]: ../../CHANGELOG.md

[circleci-badge]: https://flat.badgen.net/circleci/github/xeroxinteractive/config/master
[circleci-link]: https://circleci.com/gh/xeroxinteractive/config/tree/master

[npm-badge]: https://flat.badgen.net/npm/v/@xerox/semantic-release-config?color=cyan
[npm-link]: https://www.npmjs.com/package/@xerox/semantic-release-config

[license-badge]: https://flat.badgen.net/badge/license/MIT

[commit-style-badge]: https://flat.badgen.net/badge/commit%20style/angular/purple
[commit-style-link]: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines

[semantic-release-badge]: https://flat.badgen.net/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80/semantic%20release/e10079
[semantic-release-link]: https://github.com/semantic-release/semantic-release