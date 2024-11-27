const Encore = require("@symfony/webpack-encore");

Encore.setOutputPath("public/build/")
  .setPublicPath("/build")
  .addEntry("app", "./assets/app.js") // Main entry for assets
  .enableSassLoader((options) => {
    options.sassOptions = {
      quietDeps: true, // Suppress deprecation warnings from dependencies
    };
  })
  .enablePostCssLoader()
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction());

const config = Encore.getWebpackConfig();
config.mode =
  process.env.NODE_ENV === "development" ? "development" : "production";
module.exports = config;
