import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTag(){
      let model = this.get('model');
      let tag = this.store.createRecord('tag');
      model.get('tags').addObject(tag);
    }
  }
});