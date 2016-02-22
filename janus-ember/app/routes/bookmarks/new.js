import Ember from 'ember';

export default Ember.Route.extend({
  model (){
    return Ember.RSVP.hash({
      bookmark: this.store.createRecord('bookmark'),
      projects: this.store.findAll('project')
    });
  },
  actions: {
    createBookmark(){
      let bookmark = this.modelFor(this.routeName).bookmark;
      debugger;
      bookmark.save();

    }
  }
});