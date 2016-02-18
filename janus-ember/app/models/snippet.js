import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr('text'),
  user: DS.belongsTo('user'),
  project: DS.belongsTo('project')
});
