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
      if(story.get('state') === "done"){
        complete += story.get('points');
      }
    });
    return Math.round(complete / total * 100);
  }.property('stories'),
  icebox: function(){
    return this.get("stories").map((story)=>{if (story.get('state') === "icebox"){return story;}}).filter(function(val) { return val !== undefined; });
  }.property('stories'),
  todo: function(){
    return this.get("stories").map((story)=>{if (story.get('state') === "todo"){return story;}}).filter(function(val) { return val !== undefined; });
  }.property('stories'),
  doing: function(){
    return this.get("stories").map((story)=>{if (story.get('state') === "doing"){return story;}}).filter(function(val) { return val !== undefined; });
  }.property('stories'),
  done: function(){
    return this.get("stories").map((story)=>{if (story.get('state') === "done"){return story;}}).filter(function(val) { return val !== undefined; });
  }.property('stories'),
  dropped: function(){
    return this.get("stories").map((story)=>{if (story.get('state') === "dropped"){return story;}}).filter(function(val) { return val !== undefined; });
  }.property('stories')
});
