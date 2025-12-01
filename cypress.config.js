const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dog.ceo/api",
    video: true,
    screenshotOnRunFailure: true,
    specPattern: "cypress/e2e/**/*.cy.js"
  },
}); 