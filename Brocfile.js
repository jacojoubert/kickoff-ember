/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  name: require('./package.json').name,

  minifyCSS: {
    enabled: true,
    options: {}
  },

  getEnvJSON: require('./config/environment')
});

// Ember Data
app.import('vendor/ember-data/ember-data.js');

// EmberUI dependencies
app.import('vendor/moment/moment.js');
app.import('vendor/ember-list-view/index.js');
app.import('vendor/Velocity.js/jquery.velocity.js');

// EmberUI
app.import('vendor/emberui/dist/named-amd/main.js', {
  'emberui': ['default']
});

app.import('vendor/emberui/dist/emberui.css');
app.import('vendor/emberui/dist/default-theme.css');


// If the library that you are including contains AMD or ES6 modules that
// you would like to import into your application please specify an
// object with the list of modules as keys along with the exports of each
// module as its value.
app.import('vendor/ic-ajax/dist/named-amd/main.js', {
  'ic-ajax': [
    'default',
    'defineFixture',
    'lookupFixture',
    'raw',
    'request',
  ]
});

module.exports = app.toTree();
