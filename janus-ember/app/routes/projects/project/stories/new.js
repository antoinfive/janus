import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('story');
  },
  actions: {
    createStory(){
     let story = this.modelFor(this.routeName);
     let project = this.modelFor('projects.project');
     story.set("project", project);
     story.save();

     this.transitionTo('projects.project', project);
   }
  }
});