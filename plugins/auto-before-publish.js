module.exports = class TestPlugin {
  constructor() {
    this.name = 'auto-before-publish';
  }

  /**
   * Tap into auto plugin points.
   * @param {import('@auto-it/core').default} auto
   */
  apply(auto) {
    auto.hooks.beforeShipIt.tap(this.name, function (context) {
      console.log(auto.remote);
      auto.remote = 'git@github.com:xeroxinteractive/config.git';
      console.log(auto.remote);
    });
  }
};
