import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user');
  this.route('projects', function() {
    this.route('project', {path: "/:project_id"});
    this.route('new');
  });
  this.route('stories');
  this.route('bookmarks');
  this.route('tags');
  this.route('snippets', function() {
    this.route('snippet', {path: "/:snippet_id"});
    this.route('new');
  });
  this.route('login');
  this.route('dashboard');
});

export default Router;
