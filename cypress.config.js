const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dog.ceo/api",

    setupNodeEvents(on, config) {
      return config;
    },

    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos"
  }
});
