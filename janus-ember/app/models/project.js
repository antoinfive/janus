import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  github_link: DS.attr('string'),
  state: DS.attr('string'),
  description: DS.attr('string'),
  user: DS.belongsTo('user'),
  bookmarks: DS.hasMany('bookmark'),
  stories: DS.hasMany('story'),
  github: function(){
    if (this.get("github_link").includes("http://")){
      return this.get("github_link");
    } else {
      return "http://".concat(this.get("github_link"));
    }
  }.property('github_link')
});
