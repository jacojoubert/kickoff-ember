Router = Ember.Router.extend
  location: ENV.locationType

Router.map ->
  this.route 'signup'
  this.route 'signin'
  this.route 'resetpassword'

`export default Router;`
