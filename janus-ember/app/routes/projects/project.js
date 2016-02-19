import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    editProject: function(){
      let project = this.modelFor(this.routeName);
      project.save();
    },
    destroy: function(){
      let project = this.modelFor(this.routeName);
      project.destroyRecord();
      this.transitionTo('projects');
    }
  }
});
