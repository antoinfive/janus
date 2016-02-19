import Ember from 'ember';

export default Ember.Component.extend({
  inactive: function(){
    if(this.get("state")==="inactive"){
      return true;
    } else {
      return false;
    }
  }.property('state'),
  incomplete: function(){
    if(this.get("state")==="incomplete"){
      return true;
    } else {
      return false;
    }
  }.property('state'),
});
