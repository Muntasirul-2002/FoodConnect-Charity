const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'afzbip',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
