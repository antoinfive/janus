import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    editProject: function(){
      let story = this.modelFor(this.routeName);
      story.save();
    },
    destroy: function(){
      let story = this.modelFor(this.routeName);
      let project = this.modelFor('projects.project');
      story.destroyRecord();
      this.transitionTo('projects.project', project);
    }
  }
});