const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "de2q18",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'http://identity-test.tst-ocpapps.biat.int:8080/auth/realms/biat-retail/protocol/openid-connect/auth?client_id=bb-web-client&redirect_uri=http%3A%2F%2Fips-edge-edge-test.tst-ocpapps.biat.int%3A8080%2Fmybiat-web%2Flogin&state=7c8750fd-7ea6-4b6a-b950-ef35ee0d5131&response_mode=fragment&response_type=code%20id_token%20token&scope=openid&nonce=400c6e93-077a-4fab-9a66-226d793fc6e6&ui_locales=fr%20en&code_challenge=UFrtNPEE4SN-NukT4O3yzFewab3onXs9EVYa1PugaWo&code_challenge_method=S256' 

  },
});
