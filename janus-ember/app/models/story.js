import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('text'),
  points: DS.attr('number'),
  state: DS.attr('string'),
  completionDate: DS.attr('date'),
  dueDate: DS.attr('date'),
  project: DS.belongsTo('project')
});
