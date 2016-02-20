import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr('string'),
  user: DS.belongsTo('user'),
  project: DS.belongsTo('project'),
  codePreview: function(){
    if (this.get("code").length > 20){
      return this.get("code").slice(0,20).concat("...");
    } else {
      return this.get("code");
    }
  }.property("code")
});
