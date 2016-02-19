import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    editBookmark: function(){
      let bookmark = this.modelFor(this.routeName);
      bookmark.save();
    },
    destroy: function(){
      let bookmark = this.modelFor(this.routeName);
      bookmark.destroyRecord();
      this.transitionTo('bookmarks');
    }
  }
});
