import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    addTag(){
      let bookmark = this.get('model').bookmark;
      let tag = this.store.createRecord('tag');
      debugger;
      bookmark.get('tags').addObject(tag);
    }
  }
});