import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      snippet: this.store.createRecord('snippet'),
      projects: this.store.findAll('project')
    });
  },
  actions: {
    createSnippet(){
     let snippet = this.modelFor(this.routeName).snippet;
     snippet.save().then((snippet) => {
       this.transitionTo('snippets.snippet', snippet.id);
     });
   }
  }
});
