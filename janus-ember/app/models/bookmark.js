import DS from 'ember-data';

export default DS.Model.extend({
  link: DS.attr('string'),
  title: DS.attr('string'),
  user: DS.belongsTo('user'),
  projects: DS.hasMany('project'),
  tags: DS.hasMany('tag')
});
