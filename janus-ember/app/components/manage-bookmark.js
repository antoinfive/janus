import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    increaseTag: function(){
      this.sendAction('onNewTag')
    },
    submit: function(){
      this.sendAction('onSubmit');
    }
  }
});
