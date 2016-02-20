import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('bookmark');
  },
  actions: {
    createBookmark(){
      let bookmark = this.modelFor(this.routeName);
      bookmark.save().then((savedBookmark) => {
        this.transitionTo('bookmarks.bookmark', savedBookmark);
      });
    }
  }
});
