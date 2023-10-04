const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const { verifyDownloadTasks } = require('cy-verify-downloads');
//const { isFileExist } = require('cy-verify-downloads');
const xlsx = require('node-xlsx').default;
//const require = require("request");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here 
      on('task', {downloadFile});
      on('task', verifyDownloadTasks);
      
    },
    //specPattern:"cypress/e2e/1-getting-started/*.cy.js",
    specPattern:"cypress/e2e/week-1/*.cy.js",
    baseUrl: 'https://www.globalsqa.com/samplepagetest',
    defaultCommandTimeout: 6000,
    pageLoadTimeout: 20000,
    requestTimeout: 6000,
    responseTimeout: 6000,
    watchForFileChanges: true,
    chromeWebSecurity: false,
    includeShadowDom: true,
    downloadsFolder: "cypress/downloads"
    //
    //experimentalRunAllSpecs:true
  },
});
