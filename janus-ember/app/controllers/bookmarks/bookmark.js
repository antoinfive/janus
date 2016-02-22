import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  actions: {
    edit: function(){
      this.toggleProperty('isEditing');
    },
    editBookmark: function(){
      this.toggleProperty('isEditing');
      return true;
    },
    addTag: function(){
      let model = this.get('model');
      let tag = this.store.createRecord('tag');
      model.get('tags').addObject(tag);
    }
  }
});
