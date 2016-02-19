import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  actions: {
    edit: function(){
      this.toggleProperty('isEditing');
    },
    editProject: function(){
      this.toggleProperty('isEditing');
      return true;
    }
  }
});
