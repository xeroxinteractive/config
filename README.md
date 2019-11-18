# config

> Monorepo for Xerox shareable configurations.

[![circleci status][circleci-badge]][circleci-link]
[![license MIT][license-badge]][license]
[![commit style angular][commit-style-badge]][commit-style-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]
[![Dependabot Status][dependabot-badge]][dependabot-link]

Holds the source code for the Xerox shareable configurations. Each used to be their own repo, but it took a lot of maintenance to update the same things in n seperate repos. The monorepo provides centralised dependencies, linting, testing and deployment.

## Configurations
* [@xerox/commitlint-config][package-commitlint] Commit message linting with angular style and extended length.
* [@xerox/eslint-config][package-eslint] 3 eslint configurations for Javascript, React and TypeScript.
* [@xerox/prettier-config][package-prettier] Xerox code formatting styles.
* [@xerox/semantic-release-config][package-semantic-release] Publishing/deployment process configuration.

---

[LICENSE][license]

[package-commitlint]: ./packages/xerox-commitlint-config
[package-eslint]: ./packages/xerox-eslint-config
[package-prettier]: ./packages/xerox-prettier-config
[package-semantic-release]: ./packages/xerox-semantic-release-config

[license]: ./LICENSE

[circleci-badge]: https://flat.badgen.net/circleci/github/xeroxinteractive/config/master
[circleci-link]: https://circleci.com/gh/xeroxinteractive/config/tree/master

[license-badge]: https://flat.badgen.net/badge/license/MIT

[commit-style-badge]: https://flat.badgen.net/badge/commit%20style/angular/purple
[commit-style-link]: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines

[semantic-release-badge]: https://flat.badgen.net/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80/semantic%20release/e10079
[semantic-release-link]: https://github.com/semantic-release/semantic-release

[dependabot-badge]: https://flat.badgen.net/dependabot/xeroxinteractive/config?icon=dependabot
[dependabot-link]: https://dependabot.com