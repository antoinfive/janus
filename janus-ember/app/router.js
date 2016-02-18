import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user');
  this.route('projects');
  this.route('stories');
  this.route('bookmarks');
  this.route('tags');
  this.route('snippets');
});

export default Router;
