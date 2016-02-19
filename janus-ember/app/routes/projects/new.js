import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('project');
  },
  actions: {
    createProject(){
      debugger;
     let project = this.modelFor(this.routeName);
     project.save();
   }
  }
});
