import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  github_link: DS.attr('string'),
  state: DS.attr('string',  {defaultValue: function() { return "incomplete"; }}),
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
  }.property('github_link'),
  progress: function(){
    var total = 0;
    var complete = 0;
    this.get("stories").forEach((story)=>{
      total += story.get('points');
      if(story.state === "done"){
        complete += story.get('points');
      }
    });
    complete = 6;
    return Math.round(complete / total * 100);
  }.property('stories')
});
