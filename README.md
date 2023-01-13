# Xerox Sharable Configurations

> Monorepo for Xerox shareable configurations.

[![ci status][ci-badge]][ci-link]
[![license MIT][license-badge]][license]
[![auto][auto-badge]][auto-link]

Holds the source code for the Xerox shareable configurations. Each used to be their own repo, but it took a lot of maintenance to update the same things in n seperate repos. The monorepo provides centralised dependencies, linting, testing and deployment.

## Configurations
* [@xerox/eslint-config][package-eslint] 3 eslint configurations for Javascript, React and TypeScript.
* [@xerox/prettier-config][package-prettier] Xerox code formatting styles.
* [@xerox/semantic-release-config][package-semantic-release] Publishing/deployment process configuration.
* [@xerox/stylelint-config][package-stylelint] stylelint configurations for CSS and SCSS.
* [@xerox/browserslist-config][package-browserslist] browserslist configurations based on Adobe Analytics usage statistics.

---

[LICENSE][license]

[package-eslint]: ./packages/xerox-eslint-config
[package-prettier]: ./packages/xerox-prettier-config
[package-semantic-release]: ./packages/xerox-semantic-release-config
[package-stylelint]: ./packages/xerox-stylelint-config
[package-browserslist]: ./packages/xerox-browserslist-config

[license]: ./LICENSE

[ci-badge]: https://img.shields.io/github/actions/workflow/status/xeroxinteractive/config/publish.yml?logo=github&style=flat-square&branch=release
[ci-link]: https://github.com/xeroxinteractive/config/actions?query=branch%3Arelease

[license-badge]: https://img.shields.io/badge/license-MIT-yellow?style=flat-square

[auto-badge]: https://img.shields.io/badge/release-auto.svg?style=flat-square&color=9B065A&label=auto&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACzElEQVR4AYXBW2iVBQAA4O+/nLlLO9NM7JSXasko2ASZMaKyhRKEDH2ohxHVWy6EiIiiLOgiZG9CtdgG0VNQoJEXRogVgZYylI1skiKVITPTTtnv3M7+v8UvnG3M+r7APLIRxStn69qzqeBBrMYyBDiL4SD0VeFmRwtrkrI5IjP0F7rjzrSjvbTqwubiLZffySrhRrSghBJa8EBYY0NyLJt8bDBOtzbEY72TldQ1kRm6otana8JK3/kzN/3V/NBPU6HsNnNlZAz/ukOalb0RBJKeQnykd7LiX5Fp/YXuQlfUuhXbg8Di5GL9jbXFq/tLa86PpxPhAPrwCYaiorS8L/uuPJh1hZFbcR8mewrx0d7JShr3F7pNW4vX0GRakKWVk7taDq7uPvFWw8YkMcPVb+vfvfRZ1i7zqFwjtmFouL72y6C/0L0Ie3GvaQXRyYVB3YZNE32/+A/D9bVLcRB3yw3hkRCdaDUtFl6Ykr20aaLvKoqIXUdbMj6GFzAmdxfWx9iIRrkDr1f27cFONGMUo/gRI/jNbIMYxJOoR1cY0OGaVPb5z9mlKbyJP/EsdmIXvsFmM7Ql42nEblX3xI1BbYbTkXCqRnxUbgzPo4T7sQBNeBG7zbAiDI8nWfZDhQWYCG4PFr+HMBQ6l5VPJybeRyJXwsdYJ/cRnlJV0yB4ZlUYtFQIkMZnst8fRrPcKezHCblz2IInMIkPzbbyb9mW42nWInc2xmE0y61AJ06oGsXL5rcOK1UdCbEXiVwNXsEy/6+EbaiVG8eeEAfxvaoSBnCH61uOD7BS1Ul8ESHBKWxCrdyd6EYNKihgEVrwOAbQruoytuBYIFfAc3gVN6iawhjKyNCEpYhVJXgbOzARyaU4hCtYizq5EI1YgiUoIlT1B7ZjByqmRWYbwtdYjoWoN7+LOIQefIqKawLzK6ID69GGpQgwhhEcwGGUzfEPAiPqsCXadFsAAAAASUVORK5CYII=
[auto-link]: https://github.com/intuit/auto