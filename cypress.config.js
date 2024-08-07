const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://homes.midlandheart.org.uk/HomePage.aspx',
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    defaultCommandTimeout: 15000,
    },
    reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
});
