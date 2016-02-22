import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs:{
    projects: {serialize: 'ids'}
  },
  isNewSerializerAPI: true
});
