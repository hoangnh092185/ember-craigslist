/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'craigslist',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    firebase: {
      apiKey: "AIzaSyAmXZ8eQmDHAEwB1kzICkiOFuM4jmsc7Bk",
      authDomain: "craigslist-f91ac.firebaseapp.com",
      databaseURL: "https://craigslist-f91ac.firebaseio.com",
      storageBucket: "craigslist-f91ac.appspot.com",
      messagingSenderId: "972931829709"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
