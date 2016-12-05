import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('create-new-blogPost');

  this.route('blog', function() {
    this.route('post',{path:"/post/:id"});
  });
});

export default Router;
