import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs:{
    projects: {serialize: 'ids'},
    tags: {serialize: 'ids'}
  },
  isNewSerializerAPI: true
});
