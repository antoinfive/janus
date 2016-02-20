import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  actions:{
    submit(){
        this.sendAction('onSubmit');
    },
    edit(){
      this.toggleProperty('isEditing');
    }
  }
});
