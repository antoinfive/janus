import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    submit(){
        debugger;
        this.sendAction('onSubmit');
      }
  }
});
