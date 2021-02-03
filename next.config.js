const path = require("path");
const PerspectivePlugin = require("@finos/perspective-webpack-plugin");

// Customize Webpack config.
// @see https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

    // This method fails.
    // I see a slew of errors in the console, and 404s for psp.async.wasm and perspective.wasm.worker.js
    config.plugins.push(
      new PerspectivePlugin()
    );

    // This method doesn't create errors, but doesn't seem to work either.
    // Perspective is compiled in INLINE mode with a warning suggesting the plugin above.
    /*
    config.module.rules.push(
      {
          test: /perspective\.worker\.js$/,
          type: "javascript/auto",
          include: path.dirname(require.resolve("@finos/perspective")),
          loader: "worker-loader"
      },
      {
          test: /perspective\.cpp\.wasm$/,
          type: "javascript/auto",
          include: path.dirname(require.resolve("@finos/perspective")),
          loader: "file-loader"
      }
    );
    */

    return config;
  },
}