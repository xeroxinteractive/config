# @xerox/stylelint-config

> Stylelint shareable configuration for Xerox projects.

[![ci status][ci-badge]][ci-link]
[![npm package][npm-badge]][npm-link]
[![license MIT][license-badge]][license-link]
[![commit style angular][commit-style-badge]][commit-style-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]

## Usage
1. Install this config and stylelint as a `devDependency`:
```bash
yarn add stylelint @xerox/stylelint-config --dev
# or
npm install stylelint @xerox/stylelint-config --save-dev
```
2. Add the following to your `package.json`:
```jsonc
{
  // ...
  "stylelint": {
    "extends": "@xerox/stylelint-config"
  }
  // ...
}
```

---
[LICENSE][license-link] | [CHANGELOG][changelog-link]

[license-link]: ../../LICENSE
[changelog-link]: ./CHANGELOG.md

[ci-badge]: https://flat.badgen.net/github/checks/xeroxinteractive/config/release?label=ci
[ci-link]: https://github.com/xeroxinteractive/config/actions?query=branch%3Arelease

[npm-badge]: https://flat.badgen.net/npm/v/@xerox/stylelint-config?color=cyan
[npm-link]: https://www.npmjs.com/package/@xerox/stylelint-config

[license-badge]: https://flat.badgen.net/badge/license/MIT

[commit-style-badge]: https://flat.badgen.net/badge/commit%20style/angular/purple
[commit-style-link]: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines

[semantic-release-badge]: https://flat.badgen.net/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80/semantic%20release/e10079
[semantic-release-link]: https://github.com/semantic-release/semantic-release
