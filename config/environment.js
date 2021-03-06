/* eslint-disable */

module.exports = function(environment) {
  var ENV = {
    apiHost: 'https://tender-api.herokuapp.com',
    // apiHost: 'https://still-castle-56624.herokuapp.com',

    modulePrefix: 'final-project',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    googleFonts: [
      'Ubuntu Condensed: 400',
      'Droid Sans: 400, 700',
      'Lato: 100, 900',
      'Rye: 400',
    ],

    'ember-simple-auth': {
      authenticationRoute: `app-instantiation`,
      routeAfterAuthentication: `dashboard.home`,
      routeIfAlreadyAuthenticated: `dashboard.home`,
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
