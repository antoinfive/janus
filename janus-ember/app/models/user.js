import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  photo: DS.attr('string'),
  uid: DS.attr('string'),
  provider: DS.attr('string'),
  auth_token: DS.attr('string'),
  projects: DS.hasMany('project'),
  snippets: DS.hasMany('snippet'),
  stories: DS.hasMany('story'),
  bookmarks: DS.hasMany('bookmark')
});
