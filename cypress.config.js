const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
 e2e: {
   specPattern: "**/*.feature",
   setupNodeEvents(on, config) {
     on("file:preprocessor", cucumber());
     return config;
    },
    // Add this section for cucumber preprocessor
    nonGlobalStepDefinitions: true,  // ensures step definitions aren't global
    stepDefinitions: 'cypress/e2e/Tests/step_definitions',  // Adjust this path to the actual step definitions directory
  },
});