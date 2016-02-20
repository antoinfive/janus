import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      snippet: this.store.findRecord('snippet', params.snippet_id),
      projects: this.store.findAll('project')
    });
  },
  actions:{
    editSnippet: function(){
      let snippet = this.modelFor(this.routeName).snippet;
      snippet.save();
    },
    destroy: function(){
      let snippet = this.modelFor(this.routeName).snippet;
      snippet.destroyRecord().then((deletedSnippetProject) => {
        this.transitionTo('projects.project', deletedSnippetProject.id);
      });
    }
  }
});
