import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.findRecord('project', params.project_id);
  },
  actions: {
    changeState(storyId, newState){
      this.store.findRecord('story', storyId).then((story)=>{
        story.set('state', newState);
        story.save();
      });
    }
  }
});
