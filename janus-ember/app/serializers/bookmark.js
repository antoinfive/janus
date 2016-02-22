import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs:{
    tags: {serialize: 'ids'},
    projects: {serialize: 'ids'}
  },
  isNewSerializerAPI: true
});
