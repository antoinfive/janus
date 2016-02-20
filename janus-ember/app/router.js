import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user');
  this.route('projects', function() {
    this.route('new');
    this.route('project', {path: "/:project_id"}, function(){
      this.route('stories', function () {
        this.route('story', {path: "/:story_id"});
        this.route('new');
      });
    });
  });
  this.route('bookmarks');
  this.route('tags');
  this.route('snippets');
  this.route('login');
});

export default Router;
