import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('bookmark', params.bookmark_id);
    // return Ember.RSVP.hash({
    //   bookmark: this.store.findRecord('bookmark', params.bookmark_id),
    //   tags: this.store.all('tag')
    // });
  },
  actions: {
    editBookmark: function(){
      let bookmark = this.modelFor(this.routeName).bookmark;
      bookmark.save();
    },
    destroy: function(){
      let bookmark = this.modelFor(this.routeName).bookmark;
      bookmark.destroyRecord();
      this.transitionTo('bookmarks');
    },

  }
});
