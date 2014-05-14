import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import EmberUI from 'emberui';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'kickoff-ember', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'kickoff-ember');

export default App;
