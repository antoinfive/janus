import Ember from 'ember';

export default Ember.Component.extend({
  points: [0, 1, 2, 3, 5, 8, 13],
  actions:{
    submit(){
        this.sendAction('onSubmit');
    }
  }
});