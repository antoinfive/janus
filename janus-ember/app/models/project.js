import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  github_link: DS.attr('string'),
  state: DS.attr('string'),
  description: DS.attr('text'),
  user: DS.belongsTo('user'),
  bookmarks: DS.hasMany('bookmark'),
  stories: DS.hasMany('story')
});
